import { renderHook, act } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { useChatEngine } from "../components/AskHoopsIntel";

afterEach(() => {
  vi.unstubAllGlobals();
  vi.restoreAllMocks();
});

describe("Ask Hoops Intel submit", () => {
  it("posts the question and streams a successful answer", async () => {
    const fetchMock = vi.fn(
      async (_url: string, init?: RequestInit) => {
        const payload = JSON.parse(String(init?.body)) as { question?: string; context?: string };
        expect(payload.question).toBe("Who leads the Pulse Index?");
        expect(payload.context?.toLowerCase()).toContain("pulse");
        return new Response("Wembanyama leads the Pulse Index.", {
          status: 200,
          headers: { "Content-Type": "text/plain; charset=utf-8" },
        });
      },
    );
    vi.stubGlobal("fetch", fetchMock);

    const { result } = renderHook(() => useChatEngine());
    await act(async () => {
      await result.current.sendMessage("Who leads the Pulse Index?");
    });

    expect(fetchMock).toHaveBeenCalledWith(
      "/api/ask",
      expect.objectContaining({ method: "POST" }),
    );
    expect(result.current.messages.at(-1)?.content).toBe("Wembanyama leads the Pulse Index.");
    expect(result.current.isLoading).toBe(false);
  });

  it("surfaces a JSON error from /api/ask instead of throwing", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn(async () =>
        new Response(JSON.stringify({ error: "API key not configured" }), {
          status: 500,
          headers: { "Content-Type": "application/json" },
        }),
      ),
    );

    const { result } = renderHook(() => useChatEngine());
    await act(async () => {
      await result.current.sendMessage("Who leads the Pulse Index?");
    });

    expect(result.current.messages.at(-1)?.content).toContain("API key not configured");
    expect(result.current.isLoading).toBe(false);
  });
});
