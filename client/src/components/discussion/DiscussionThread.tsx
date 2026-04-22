import { useEffect, useMemo, useState } from "react";
import {
  createNotification,
  ensureThread,
  getCurrentUser,
  getOrCreateProfile,
  listComments,
  listCommentVoteTotals,
  listProfilesByIds,
  postComment,
  voteComment,
  type CommentSort,
  type CommunityComment,
  type Profile,
  type ThreadScopeType,
} from "../../lib/communityClient";
import { trackMetric } from "../../lib/engagementMetrics";

function formatAgo(dateIso: string): string {
  const ms = Date.now() - new Date(dateIso).getTime();
  const mins = Math.floor(ms / 60000);
  if (mins < 1) return "just now";
  if (mins < 60) return `${mins}m`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h`;
  return `${Math.floor(hrs / 24)}d`;
}

export default function DiscussionThread({
  scopeType,
  scopeKey,
  title,
  targetPath,
}: {
  scopeType: ThreadScopeType;
  scopeKey: string;
  title: string;
  targetPath: string;
}) {
  const [threadId, setThreadId] = useState<string | null>(null);
  const [comments, setComments] = useState<CommunityComment[]>([]);
  const [profiles, setProfiles] = useState<Record<string, Profile>>({});
  const [voteTotals, setVoteTotals] = useState<Record<string, number>>({});
  const [draft, setDraft] = useState("");
  const [replyTarget, setReplyTarget] = useState<CommunityComment | null>(null);
  const [sort, setSort] = useState<CommentSort>("latest");
  const [userId, setUserId] = useState<string | null>(null);
  const [canPost, setCanPost] = useState(false);
  const [loading, setLoading] = useState(true);

  async function refresh(thread: string) {
    const rows = await listComments(thread);
    setComments(rows);
    const ids = Array.from(new Set(rows.map((r) => r.author_id)));
    const [profileMap, votes] = await Promise.all([
      listProfilesByIds(ids),
      listCommentVoteTotals(rows.map((r) => r.id)),
    ]);
    setProfiles(profileMap);
    setVoteTotals(votes);
  }

  useEffect(() => {
    let mounted = true;
    (async () => {
      setLoading(true);
      try {
        const user = await getCurrentUser();
        if (user) {
          setUserId(user.id);
          setCanPost(true);
          await getOrCreateProfile(user);
        } else {
          setUserId(null);
          setCanPost(false);
        }
        const thread = await ensureThread(scopeType, scopeKey, title);
        if (!mounted) return;
        if (!thread) {
          setThreadId(null);
          setComments([]);
          return;
        }
        setThreadId(thread.id);
        trackMetric("thread_visit");
        await refresh(thread.id);
      } catch {
        if (!mounted) return;
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => {
      mounted = false;
    };
  }, [scopeType, scopeKey, title]);

  const sortedComments = useMemo(() => {
    const rows = [...comments];
    if (sort === "top") {
      rows.sort((a, b) => {
        const s = (voteTotals[b.id] ?? 0) - (voteTotals[a.id] ?? 0);
        if (s !== 0) return s;
        return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
      });
      return rows;
    }
    rows.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
    return rows;
  }, [comments, sort, voteTotals]);

  const hotTake = useMemo(() => {
    const rows = [...comments].sort((a, b) => (voteTotals[b.id] ?? 0) - (voteTotals[a.id] ?? 0));
    return rows[0] ?? null;
  }, [comments, voteTotals]);

  async function handlePost() {
    if (!threadId || !draft.trim()) return;
    const parentId = replyTarget?.id ?? null;
    const created = await postComment({ threadId, body: draft, parentId });
    setDraft("");
    setReplyTarget(null);
    trackMetric("comment_posted");
    await refresh(threadId);
    if (!created || !userId) return;

    if (replyTarget && replyTarget.author_id !== userId) {
      await createNotification({
        userId: replyTarget.author_id,
        actorId: userId,
        type: "reply",
        message: "Someone replied to your comment.",
        targetPath,
      });
    }

    const mentions = new Set(
      (created.body.match(/@([a-zA-Z0-9_]+)/g) ?? [])
        .map((m) => m.slice(1).toLowerCase()),
    );
    Object.values(profiles).forEach((p) => {
      const handle = (p.display_name ?? "").toLowerCase().replace(/\s+/g, "_");
      if (!handle || p.id === userId) return;
      if (mentions.has(handle)) {
        createNotification({
          userId: p.id,
          actorId: userId,
          type: "mention",
          message: "You were mentioned in a discussion.",
          targetPath,
        }).catch(() => {});
      }
    });
  }

  return (
    <div className="glass-card rounded-lg p-3 mt-3">
      <div className="flex items-center justify-between mb-2">
        <div className="section-label">DISCUSSION</div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setSort("latest")}
            className="text-[10px] px-2 py-1 rounded"
            style={{
              background: sort === "latest" ? "rgba(14,165,233,0.15)" : "rgba(255,255,255,0.03)",
              color: sort === "latest" ? "#0EA5E9" : "rgba(255,255,255,0.45)",
            }}
          >
            Latest
          </button>
          <button
            onClick={() => setSort("top")}
            className="text-[10px] px-2 py-1 rounded"
            style={{
              background: sort === "top" ? "rgba(14,165,233,0.15)" : "rgba(255,255,255,0.03)",
              color: sort === "top" ? "#0EA5E9" : "rgba(255,255,255,0.45)",
            }}
          >
            Top
          </button>
        </div>
      </div>

      {hotTake && (voteTotals[hotTake.id] ?? 0) > 0 && (
        <div
          className="mb-3 text-xs p-2 rounded"
          style={{ background: "rgba(245,158,11,0.08)", border: "1px solid rgba(245,158,11,0.2)", color: "rgba(255,255,255,0.75)" }}
        >
          <span style={{ color: "#F59E0B", fontWeight: 700 }}>HOT TAKE</span> · {hotTake.body}
        </div>
      )}

      {replyTarget && (
        <div className="mb-2 text-xs p-2 rounded flex items-center justify-between" style={{ background: "rgba(14,165,233,0.08)", color: "rgba(255,255,255,0.7)" }}>
          Replying to {(profiles[replyTarget.author_id]?.display_name ?? "User")}
          <button onClick={() => setReplyTarget(null)} style={{ color: "#0EA5E9" }}>Cancel</button>
        </div>
      )}

      <div className="flex gap-2 mb-3">
        <input
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          placeholder={canPost ? "Share your take..." : "Sign in to join discussion"}
          disabled={!canPost}
          className="flex-1 px-3 py-2 rounded text-xs bg-white/5 text-white border border-white/10 outline-none"
        />
        <button
          onClick={handlePost}
          disabled={!canPost || !draft.trim()}
          className="px-3 py-2 rounded text-xs font-semibold"
          style={{ background: canPost ? "#0EA5E9" : "rgba(255,255,255,0.08)", color: canPost ? "#fff" : "rgba(255,255,255,0.35)" }}
        >
          Post
        </button>
      </div>

      <div className="space-y-2 max-h-56 overflow-y-auto">
        {loading && <div className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>Loading discussion...</div>}
        {!loading && sortedComments.length === 0 && (
          <div className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>No comments yet. Start the thread.</div>
        )}
        {sortedComments.map((c) => {
          const author = profiles[c.author_id]?.display_name ?? "User";
          const isReply = Boolean(c.parent_id);
          return (
            <div key={c.id} className="rounded p-2 text-xs" style={{ background: "rgba(255,255,255,0.03)", marginLeft: isReply ? 14 : 0 }}>
              <div className="flex items-center justify-between mb-1">
                <div style={{ color: "rgba(255,255,255,0.65)" }}>
                  <span style={{ color: "#fff", fontWeight: 600 }}>{author}</span> · {formatAgo(c.created_at)}
                </div>
                <div className="flex items-center gap-1">
                  <button onClick={() => voteComment(c.id, 1).then(() => threadId && refresh(threadId))} style={{ color: "rgba(255,255,255,0.45)" }}>▲</button>
                  <span className="mono-data" style={{ color: "#0EA5E9" }}>{voteTotals[c.id] ?? 0}</span>
                  <button onClick={() => voteComment(c.id, -1).then(() => threadId && refresh(threadId))} style={{ color: "rgba(255,255,255,0.45)" }}>▼</button>
                </div>
              </div>
              <div style={{ color: "rgba(255,255,255,0.8)" }}>{c.body}</div>
              <div className="mt-1">
                <button onClick={() => setReplyTarget(c)} style={{ color: "#0EA5E9" }}>Reply</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
