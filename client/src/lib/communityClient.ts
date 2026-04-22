import { getAccessToken, getUser, type User } from "./supabaseClient";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL ?? "";
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY ?? "";

export type ThreadScopeType = "game" | "edition";
export type CommentSort = "latest" | "top";

export interface Profile {
  id: string;
  display_name: string | null;
  avatar_url: string | null;
  bio: string | null;
}

export interface CommunityThread {
  id: string;
  scope_type: ThreadScopeType;
  scope_key: string;
  title: string;
  created_at: string;
  updated_at: string;
}

export interface CommunityComment {
  id: string;
  thread_id: string;
  author_id: string;
  body: string;
  parent_id: string | null;
  created_at: string;
}

export interface CommentVoteTotal {
  comment_id: string;
  score: number;
}

export interface CommunityNotification {
  id: string;
  user_id: string;
  actor_id: string | null;
  type: "reply" | "mention";
  message: string;
  target_path: string;
  read_at: string | null;
  created_at: string;
}

async function dbFetch(path: string, options: { method?: string; body?: unknown; token?: string | null } = {}) {
  const { method = "GET", body, token } = options;
  const headers: Record<string, string> = {
    apikey: SUPABASE_ANON_KEY,
    "Content-Type": "application/json",
  };
  if (token) headers.Authorization = `Bearer ${token}`;
  if (method === "POST") headers.Prefer = "return=representation";

  const res = await fetch(`${SUPABASE_URL}/rest/v1/${path}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  });
  if (!res.ok) {
    throw new Error(`Community DB error: ${res.status}`);
  }
  if (res.status === 204) return null;
  const text = await res.text();
  return text ? JSON.parse(text) : null;
}

export async function getCurrentUser() {
  return getUser();
}

export async function getOrCreateProfile(user: User): Promise<Profile | null> {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) return null;
  const token = getAccessToken();
  if (!token) return null;
  const displayName = user.user_metadata?.display_name ?? user.email.split("@")[0];
  const upsertPath = "profiles?on_conflict=id";
  const rows = (await dbFetch(upsertPath, {
    method: "POST",
    token,
    body: [{ id: user.id, display_name: displayName, avatar_url: user.user_metadata?.avatar_url ?? null }],
  })) as Profile[];
  return rows[0] ?? null;
}

export async function getThread(scopeType: ThreadScopeType, scopeKey: string): Promise<CommunityThread | null> {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) return null;
  const encoded = encodeURIComponent(scopeKey);
  const rows = (await dbFetch(
    `community_threads?select=*&scope_type=eq.${scopeType}&scope_key=eq.${encoded}&limit=1`,
  )) as CommunityThread[];
  return rows[0] ?? null;
}

export async function ensureThread(
  scopeType: ThreadScopeType,
  scopeKey: string,
  title: string,
): Promise<CommunityThread | null> {
  const existing = await getThread(scopeType, scopeKey);
  if (existing) return existing;
  const token = getAccessToken();
  if (!token) return null;
  const user = await getUser();
  if (!user) return null;
  const rows = (await dbFetch("community_threads?on_conflict=scope_type,scope_key", {
    method: "POST",
    token,
    body: [{ scope_type: scopeType, scope_key: scopeKey, title, created_by: user.id }],
  })) as CommunityThread[];
  return rows[0] ?? null;
}

export async function listComments(threadId: string): Promise<CommunityComment[]> {
  const rows = (await dbFetch(
    `community_comments?select=id,thread_id,author_id,body,parent_id,created_at&thread_id=eq.${threadId}&order=created_at.desc`,
  )) as CommunityComment[];
  return rows;
}

export async function postComment(input: {
  threadId: string;
  body: string;
  parentId?: string | null;
}): Promise<CommunityComment | null> {
  const token = getAccessToken();
  if (!token) throw new Error("Sign in required");
  const user = await getUser();
  if (!user) throw new Error("Sign in required");
  const rows = (await dbFetch("community_comments", {
    method: "POST",
    token,
    body: [{ thread_id: input.threadId, body: input.body.trim(), parent_id: input.parentId ?? null, author_id: user.id }],
  })) as CommunityComment[];
  return rows[0] ?? null;
}

export async function listProfilesByIds(ids: string[]): Promise<Record<string, Profile>> {
  if (ids.length === 0) return {};
  const idList = ids.map((i) => `"${i}"`).join(",");
  const rows = (await dbFetch(`profiles?select=id,display_name,avatar_url,bio&id=in.(${idList})`)) as Profile[];
  return rows.reduce<Record<string, Profile>>((acc, p) => {
    acc[p.id] = p;
    return acc;
  }, {});
}

export async function voteComment(commentId: string, value: -1 | 1): Promise<void> {
  const token = getAccessToken();
  if (!token) throw new Error("Sign in required");
  const user = await getUser();
  if (!user) throw new Error("Sign in required");
  await dbFetch("community_comment_votes?on_conflict=comment_id,user_id", {
    method: "POST",
    token,
    body: [{ comment_id: commentId, user_id: user.id, value }],
  });
}

export async function listCommentVoteTotals(commentIds: string[]): Promise<Record<string, number>> {
  if (commentIds.length === 0) return {};
  const inList = commentIds.map((id) => `"${id}"`).join(",");
  const rows = (await dbFetch(
    `community_comment_vote_totals?select=comment_id,score&comment_id=in.(${inList})`,
  )) as CommentVoteTotal[];
  return rows.reduce<Record<string, number>>((acc, row) => {
    acc[row.comment_id] = row.score;
    return acc;
  }, {});
}

export async function createNotification(input: {
  userId: string;
  actorId?: string | null;
  type: "reply" | "mention";
  message: string;
  targetPath: string;
}): Promise<void> {
  const token = getAccessToken();
  if (!token) return;
  const user = await getUser();
  if (!user) return;
  await dbFetch("community_notifications", {
    method: "POST",
    token,
    body: [
      {
        user_id: input.userId,
        actor_id: input.actorId ?? user.id,
        type: input.type,
        message: input.message,
        target_path: input.targetPath,
      },
    ],
  });
}

export async function listNotifications(limit = 15): Promise<CommunityNotification[]> {
  const token = getAccessToken();
  if (!token) return [];
  const rows = (await dbFetch(
    `community_notifications?select=*&order=created_at.desc&limit=${limit}`,
    { token },
  )) as CommunityNotification[];
  return rows;
}

export async function markNotificationRead(id: string): Promise<void> {
  const token = getAccessToken();
  if (!token) return;
  await dbFetch(`community_notifications?id=eq.${id}`, {
    method: "PATCH",
    token,
    body: { read_at: new Date().toISOString() },
  });
}
