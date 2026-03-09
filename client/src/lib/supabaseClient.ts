// Supabase Client — Auth + Database integration
// Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in .env

// Lightweight Supabase-compatible client (no SDK dependency)
// This avoids adding a large dependency — uses fetch directly against the Supabase REST API

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL ?? "";
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY ?? "";

export const isSupabaseConfigured = Boolean(SUPABASE_URL && SUPABASE_ANON_KEY);

// ═══════════════════════════════════════════════════════════
// AUTH
// ═══════════════════════════════════════════════════════════

export interface User {
  id: string;
  email: string;
  created_at: string;
  user_metadata?: { display_name?: string; avatar_url?: string };
}

export interface AuthSession {
  access_token: string;
  refresh_token: string;
  user: User;
}

const TOKEN_KEY = "hoops-intel-auth-token";
const REFRESH_KEY = "hoops-intel-refresh-token";

function getStoredToken(): string | null {
  return localStorage.getItem(TOKEN_KEY);
}

function storeSession(session: AuthSession): void {
  localStorage.setItem(TOKEN_KEY, session.access_token);
  localStorage.setItem(REFRESH_KEY, session.refresh_token);
}

function clearSession(): void {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(REFRESH_KEY);
}

async function authFetch(endpoint: string, body: any): Promise<any> {
  const res = await fetch(`${SUPABASE_URL}/auth/v1${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: SUPABASE_ANON_KEY,
    },
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({ message: res.statusText }));
    throw new Error(err.message ?? err.msg ?? "Auth error");
  }
  return res.json();
}

export async function signUp(email: string, password: string, displayName?: string): Promise<AuthSession> {
  const data = await authFetch("/signup", {
    email,
    password,
    data: { display_name: displayName ?? email.split("@")[0] },
  });
  if (data.access_token) storeSession(data);
  return data;
}

export async function signIn(email: string, password: string): Promise<AuthSession> {
  const data = await authFetch("/token?grant_type=password", { email, password });
  storeSession(data);
  return data;
}

export async function signInWithOAuth(provider: "google" | "github"): Promise<void> {
  window.location.href = `${SUPABASE_URL}/auth/v1/authorize?provider=${provider}&redirect_to=${window.location.origin}`;
}

export async function signOut(): Promise<void> {
  const token = getStoredToken();
  if (token) {
    await fetch(`${SUPABASE_URL}/auth/v1/logout`, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}`, apikey: SUPABASE_ANON_KEY },
    }).catch(() => {});
  }
  clearSession();
}

export async function getUser(): Promise<User | null> {
  const token = getStoredToken();
  if (!token) return null;
  try {
    const res = await fetch(`${SUPABASE_URL}/auth/v1/user`, {
      headers: { Authorization: `Bearer ${token}`, apikey: SUPABASE_ANON_KEY },
    });
    if (!res.ok) { clearSession(); return null; }
    return res.json();
  } catch { return null; }
}

// ═══════════════════════════════════════════════════════════
// DATABASE (PostgREST)
// ═══════════════════════════════════════════════════════════

async function dbFetch(table: string, options: {
  method?: string;
  query?: string;
  body?: any;
  token?: string | null;
} = {}): Promise<any> {
  const { method = "GET", query = "", body, token } = options;
  const headers: Record<string, string> = {
    apikey: SUPABASE_ANON_KEY,
    "Content-Type": "application/json",
    Prefer: method === "POST" ? "return=representation" : "count=exact",
  };
  if (token) headers.Authorization = `Bearer ${token}`;

  const res = await fetch(`${SUPABASE_URL}/rest/v1/${table}${query ? `?${query}` : ""}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  });
  if (!res.ok) throw new Error(`DB error: ${res.statusText}`);
  return res.json();
}

// User favorites
export async function getFavorites(): Promise<{ teams: string[]; players: string[] }> {
  const token = getStoredToken();
  if (!token) return { teams: [], players: [] };
  try {
    const data = await dbFetch("user_favorites", { query: "select=*", token });
    return {
      teams: data.filter((f: any) => f.type === "team").map((f: any) => f.value),
      players: data.filter((f: any) => f.type === "player").map((f: any) => f.value),
    };
  } catch { return { teams: [], players: [] }; }
}

export async function toggleFavorite(type: "team" | "player", value: string): Promise<void> {
  const token = getStoredToken();
  if (!token) return;
  const existing = await dbFetch("user_favorites", {
    query: `type=eq.${type}&value=eq.${encodeURIComponent(value)}`,
    token,
  });
  if (existing.length > 0) {
    await dbFetch(`user_favorites?id=eq.${existing[0].id}`, { method: "DELETE", token });
  } else {
    await dbFetch("user_favorites", { method: "POST", body: { type, value }, token });
  }
}

// Reactions (synced)
export async function syncReaction(itemId: string, reaction: string): Promise<void> {
  const token = getStoredToken();
  if (!token) return;
  await dbFetch("reactions", { method: "POST", body: { item_id: itemId, reaction }, token });
}

export async function getReactionCounts(itemId: string): Promise<Record<string, number>> {
  try {
    const data = await dbFetch("reaction_counts", { query: `item_id=eq.${encodeURIComponent(itemId)}` });
    const counts: Record<string, number> = {};
    for (const row of data) counts[row.reaction] = row.count;
    return counts;
  } catch { return {}; }
}

// Email digest preferences
export async function updateDigestPrefs(prefs: { enabled: boolean; favoriteOnly: boolean }): Promise<void> {
  const token = getStoredToken();
  if (!token) return;
  await dbFetch("digest_preferences", { method: "POST", body: prefs, token });
}
