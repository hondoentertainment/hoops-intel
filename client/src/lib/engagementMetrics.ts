const KEY = "hoops-intel-engagement-metrics";

interface MetricsState {
  sessionStarts: number;
  commentsPosted: number;
  threadVisits: number;
  lastUpdatedAt: number;
}

function readState(): MetricsState {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) {
      return { sessionStarts: 0, commentsPosted: 0, threadVisits: 0, lastUpdatedAt: Date.now() };
    }
    return JSON.parse(raw) as MetricsState;
  } catch {
    return { sessionStarts: 0, commentsPosted: 0, threadVisits: 0, lastUpdatedAt: Date.now() };
  }
}

function writeState(state: MetricsState) {
  localStorage.setItem(KEY, JSON.stringify(state));
}

export function trackMetric(event: "session_start" | "comment_posted" | "thread_visit") {
  const next = readState();
  if (event === "session_start") next.sessionStarts += 1;
  if (event === "comment_posted") next.commentsPosted += 1;
  if (event === "thread_visit") next.threadVisits += 1;
  next.lastUpdatedAt = Date.now();
  writeState(next);
}
