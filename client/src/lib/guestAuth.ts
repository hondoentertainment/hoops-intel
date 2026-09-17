const TOKEN_KEY = "hoops-intel-auth-token";

/** Local JWT only — does not hit Supabase. Honest guest vs signed-in UI. */
export function hasLocalAuthToken(): boolean {
  if (typeof localStorage === "undefined") return false;
  return Boolean(localStorage.getItem(TOKEN_KEY));
}
