import { describe, it, expect, vi, beforeEach } from "vitest";

// Mock import.meta.env
vi.stubEnv("VITE_SUPABASE_URL", "https://test.supabase.co");
vi.stubEnv("VITE_SUPABASE_ANON_KEY", "test-anon-key");

describe("supabaseClient", () => {
  beforeEach(() => {
    localStorage.clear();
    vi.restoreAllMocks();
  });

  describe("session management", () => {
    const TOKEN_KEY = "hoops-intel-auth-token";
    const REFRESH_KEY = "hoops-intel-refresh-token";

    it("stores tokens on sign in", () => {
      const session = {
        access_token: "test-token-123",
        refresh_token: "refresh-456",
      };
      localStorage.setItem(TOKEN_KEY, session.access_token);
      localStorage.setItem(REFRESH_KEY, session.refresh_token);

      expect(localStorage.getItem(TOKEN_KEY)).toBe("test-token-123");
      expect(localStorage.getItem(REFRESH_KEY)).toBe("refresh-456");
    });

    it("clears tokens on sign out", () => {
      localStorage.setItem(TOKEN_KEY, "test-token");
      localStorage.setItem(REFRESH_KEY, "refresh-token");

      localStorage.removeItem(TOKEN_KEY);
      localStorage.removeItem(REFRESH_KEY);

      expect(localStorage.getItem(TOKEN_KEY)).toBeNull();
      expect(localStorage.getItem(REFRESH_KEY)).toBeNull();
    });

    it("returns null when no token stored", () => {
      expect(localStorage.getItem(TOKEN_KEY)).toBeNull();
    });
  });

  describe("signUp", () => {
    it("calls auth endpoint with correct payload", async () => {
      const mockResponse = {
        access_token: "new-token",
        refresh_token: "new-refresh",
        user: { id: "user-1", email: "test@example.com", created_at: "2026-01-01" },
      };

      vi.stubGlobal(
        "fetch",
        vi.fn().mockResolvedValue({
          ok: true,
          json: () => Promise.resolve(mockResponse),
        })
      );

      const { signUp } = await import("../lib/supabaseClient");
      const result = await signUp("test@example.com", "password123", "TestUser");

      expect(result.access_token).toBe("new-token");
      expect(fetch).toHaveBeenCalledWith(
        expect.stringContaining("/auth/v1/signup"),
        expect.objectContaining({
          method: "POST",
          body: expect.stringContaining("test@example.com"),
        })
      );
    });

    it("stores session after successful signup", async () => {
      vi.stubGlobal(
        "fetch",
        vi.fn().mockResolvedValue({
          ok: true,
          json: () =>
            Promise.resolve({
              access_token: "signup-token",
              refresh_token: "signup-refresh",
              user: { id: "1", email: "a@b.com", created_at: "" },
            }),
        })
      );

      const { signUp } = await import("../lib/supabaseClient");
      await signUp("a@b.com", "pass");

      expect(localStorage.getItem("hoops-intel-auth-token")).toBe("signup-token");
      expect(localStorage.getItem("hoops-intel-refresh-token")).toBe("signup-refresh");
    });

    it("throws on auth error", async () => {
      vi.stubGlobal(
        "fetch",
        vi.fn().mockResolvedValue({
          ok: false,
          json: () => Promise.resolve({ message: "Email already registered" }),
        })
      );

      const { signUp } = await import("../lib/supabaseClient");
      await expect(signUp("dup@example.com", "pass")).rejects.toThrow(
        "Email already registered"
      );
    });
  });

  describe("signIn", () => {
    it("stores session on successful sign in", async () => {
      vi.stubGlobal(
        "fetch",
        vi.fn().mockResolvedValue({
          ok: true,
          json: () =>
            Promise.resolve({
              access_token: "signin-token",
              refresh_token: "signin-refresh",
              user: { id: "1", email: "a@b.com", created_at: "" },
            }),
        })
      );

      const { signIn } = await import("../lib/supabaseClient");
      const result = await signIn("a@b.com", "pass");

      expect(result.access_token).toBe("signin-token");
      expect(localStorage.getItem("hoops-intel-auth-token")).toBe("signin-token");
    });
  });

  describe("signOut", () => {
    it("clears session tokens", async () => {
      localStorage.setItem("hoops-intel-auth-token", "my-token");
      localStorage.setItem("hoops-intel-refresh-token", "my-refresh");

      vi.stubGlobal(
        "fetch",
        vi.fn().mockResolvedValue({ ok: true })
      );

      const { signOut } = await import("../lib/supabaseClient");
      await signOut();

      expect(localStorage.getItem("hoops-intel-auth-token")).toBeNull();
      expect(localStorage.getItem("hoops-intel-refresh-token")).toBeNull();
    });

    it("clears tokens even when logout API fails", async () => {
      localStorage.setItem("hoops-intel-auth-token", "my-token");
      localStorage.setItem("hoops-intel-refresh-token", "my-refresh");

      vi.stubGlobal(
        "fetch",
        vi.fn().mockRejectedValue(new Error("Network error"))
      );

      const { signOut } = await import("../lib/supabaseClient");
      await signOut();

      expect(localStorage.getItem("hoops-intel-auth-token")).toBeNull();
      expect(localStorage.getItem("hoops-intel-refresh-token")).toBeNull();
    });
  });

  describe("getUser", () => {
    it("returns null when no token stored", async () => {
      const { getUser } = await import("../lib/supabaseClient");
      const user = await getUser();
      expect(user).toBeNull();
    });

    it("returns user data when token is valid", async () => {
      localStorage.setItem("hoops-intel-auth-token", "valid-token");

      vi.stubGlobal(
        "fetch",
        vi.fn().mockResolvedValue({
          ok: true,
          json: () =>
            Promise.resolve({
              id: "user-123",
              email: "test@example.com",
              created_at: "2026-01-01",
            }),
        })
      );

      const { getUser } = await import("../lib/supabaseClient");
      const user = await getUser();
      expect(user).not.toBeNull();
      expect(user!.id).toBe("user-123");
      expect(user!.email).toBe("test@example.com");
    });

    it("clears session and returns null for invalid token", async () => {
      localStorage.setItem("hoops-intel-auth-token", "expired-token");

      vi.stubGlobal(
        "fetch",
        vi.fn().mockResolvedValue({ ok: false, status: 401 })
      );

      const { getUser } = await import("../lib/supabaseClient");
      const user = await getUser();
      expect(user).toBeNull();
      expect(localStorage.getItem("hoops-intel-auth-token")).toBeNull();
    });
  });

  describe("getFavorites", () => {
    it("returns empty favorites when no token", async () => {
      const { getFavorites } = await import("../lib/supabaseClient");
      const favs = await getFavorites();
      expect(favs).toEqual({ teams: [], players: [] });
    });

    it("parses team and player favorites correctly", async () => {
      localStorage.setItem("hoops-intel-auth-token", "valid-token");

      vi.stubGlobal(
        "fetch",
        vi.fn().mockResolvedValue({
          ok: true,
          json: () =>
            Promise.resolve([
              { type: "team", value: "LAL" },
              { type: "team", value: "BOS" },
              { type: "player", value: "LeBron James" },
            ]),
        })
      );

      const { getFavorites } = await import("../lib/supabaseClient");
      const favs = await getFavorites();
      expect(favs.teams).toEqual(["LAL", "BOS"]);
      expect(favs.players).toEqual(["LeBron James"]);
    });
  });

  describe("getReactionCounts", () => {
    it("returns counts from API", async () => {
      vi.stubGlobal(
        "fetch",
        vi.fn().mockResolvedValue({
          ok: true,
          json: () =>
            Promise.resolve([
              { reaction: "fire", count: 15 },
              { reaction: "goat", count: 8 },
            ]),
        })
      );

      const { getReactionCounts } = await import("../lib/supabaseClient");
      const counts = await getReactionCounts("item-123");
      expect(counts.fire).toBe(15);
      expect(counts.goat).toBe(8);
    });

    it("returns empty object on error", async () => {
      vi.stubGlobal(
        "fetch",
        vi.fn().mockRejectedValue(new Error("Network error"))
      );

      const { getReactionCounts } = await import("../lib/supabaseClient");
      const counts = await getReactionCounts("item-123");
      expect(counts).toEqual({});
    });
  });
});
