// @vitest-environment node
import { EventEmitter } from "node:events";
import { describe, expect, it, afterEach } from "vitest";
import askHandler from "./ask.js";
import contactIntake from "./contact-intake.js";
import { adaptNodeHandler, type NodeLikeRequest, type NodeLikeResponse } from "./_lib/nodeHandler.js";
import timeseries from "./embed-analytics-timeseries.js";
import guestPulseQueue from "./guest-pulse-queue.js";
import stripeWebhook from "./stripe-webhook.js";

function mockRes() {
  const chunks: Buffer[] = [];
  const state = { statusCode: 0, headers: {} as Record<string, string>, ended: false };
  const res: NodeLikeResponse & {
    statusCode: number;
    headers: Record<string, string>;
    text: () => string;
    ended: boolean;
  } = {
    statusCode: 0,
    headers: {},
    ended: false,
    writeHead(code, headers) {
      state.statusCode = code;
      state.headers = (headers as Record<string, string>) ?? {};
      res.statusCode = code;
      res.headers = state.headers;
    },
    write(chunk) {
      chunks.push(typeof chunk === "string" ? Buffer.from(chunk) : Buffer.from(chunk));
      return true;
    },
    end(chunk) {
      if (chunk) res.write(chunk);
      state.ended = true;
      res.ended = true;
    },
    text() {
      return Buffer.concat(chunks).toString("utf8");
    },
  };
  return res;
}

function nodePost(body: unknown, headers: Record<string, string> = {}): NodeLikeRequest {
  return {
    method: "POST",
    url: "/api/ask",
    headers: {
      host: "hoopsintel.net",
      "content-type": "application/json",
      ...headers,
    },
    readableEnded: true,
    body,
  };
}

describe("node request adapter", () => {
  it("reads plain Node headers and a JSON body, then writes the Response", async () => {
    const handler = adaptNodeHandler(async (req) => {
      const client = req.headers.get("X-RateLimit");
      const body = (await req.json()) as { question?: string };
      const days = new URL(req.url).searchParams.get("days");
      return Response.json({ client, question: body.question, days });
    });
    const res = mockRes();
    await handler(
      {
        method: "POST",
        url: "/api/ask?days=3",
        headers: { host: "hoopsintel.net", "content-type": "application/json", "x-ratelimit": "desk" },
        readableEnded: true,
        body: { question: "Who leads the Pulse Index?" },
      },
      res,
    );
    expect(res.statusCode).toBe(200);
    expect(JSON.parse(res.text())).toEqual({
      client: "desk",
      question: "Who leads the Pulse Index?",
      days: "3",
    });
    expect(typeof (nodePost({}).headers as { get?: unknown }).get).not.toBe("function");
  });

  it("reads a Node request stream and streams the response back", async () => {
    const handler = adaptNodeHandler(async (req) => {
      const body = (await req.json()) as { question?: string };
      const encoder = new TextEncoder();
      const stream = new ReadableStream({
        start(controller) {
          controller.enqueue(encoder.encode(`Answer: ${body.question}`));
          controller.close();
        },
      });
      return new Response(stream, {
        status: 200,
        headers: { "Content-Type": "text/plain; charset=utf-8", "Transfer-Encoding": "chunked" },
      });
    });

    const req = new EventEmitter() as EventEmitter & NodeLikeRequest;
    req.method = "POST";
    req.url = "/api/ask";
    req.headers = { host: "hoopsintel.net", "content-type": "application/json" };

    const res = mockRes();
    const pending = handler(req, res);
    req.emit("data", Buffer.from(JSON.stringify({ question: "Who leads the Pulse Index?" })));
    req.emit("end");
    await pending;

    expect(res.statusCode).toBe(200);
    expect(res.headers["transfer-encoding"]).toBeUndefined();
    expect(res.text()).toBe("Answer: Who leads the Pulse Index?");
  });

  it("returns a Web Response when called with a Fetch Request", async () => {
    const handler = adaptNodeHandler(async (req) => Response.json({ method: req.method }));
    const response = await handler(new Request("https://hoopsintel.net/api/ask", { method: "POST" }));
    expect(response).toBeInstanceOf(Response);
    expect(response?.status).toBe(200);
    await expect(response?.json()).resolves.toEqual({ method: "POST" });
  });
});

describe("/api/ask on a Node-style request", () => {
  const previousKey = process.env.ANTHROPIC_API_KEY;

  afterEach(() => {
    if (previousKey === undefined) delete process.env.ANTHROPIC_API_KEY;
    else process.env.ANTHROPIC_API_KEY = previousKey;
  });

  it("does not throw headers.get and answers the production question shape", async () => {
    delete process.env.ANTHROPIC_API_KEY;
    const res = mockRes();
    await expect(
      askHandler(
        nodePost(
          { question: "Who leads the Pulse Index?" },
          { "x-ratelimit": `node-${Date.now()}` },
        ),
        res,
      ),
    ).resolves.toBeUndefined();
    expect(res.ended).toBe(true);
    expect(res.statusCode).toBe(500);
    expect(JSON.parse(res.text())).toEqual({ error: "API key not configured" });
    expect(res.headers["access-control-allow-origin"]).toBe("*");
  });

  it("accepts the same payload as a Fetch Request", async () => {
    delete process.env.ANTHROPIC_API_KEY;
    const response = await askHandler(
      new Request("https://hoopsintel.net/api/ask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-RateLimit": `web-${Date.now()}`,
        },
        body: JSON.stringify({ question: "Who leads the Pulse Index?" }),
      }),
    );
    expect(response).toBeInstanceOf(Response);
    expect(response?.status).toBe(500);
    await expect(response?.json()).resolves.toEqual({ error: "API key not configured" });
  });

  it("rejects a non-POST Node request before touching the model", async () => {
    const res = mockRes();
    await askHandler({ method: "GET", url: "/api/ask", headers: { host: "hoopsintel.net" } }, res);
    expect(res.statusCode).toBe(405);
    expect(JSON.parse(res.text()).error).toBe("Method not allowed");
  });
});

describe("other Node query routes", () => {
  it("parses a relative /api URL on embed analytics timeseries", async () => {
    const prevUrl = process.env.SUPABASE_URL;
    const prevKey = process.env.SUPABASE_SERVICE_KEY;
    delete process.env.SUPABASE_URL;
    delete process.env.SUPABASE_SERVICE_KEY;
    try {
      const res = mockRes();
      await timeseries(
        { method: "GET", url: "/api/embed-analytics-timeseries?days=14", headers: { host: "hoopsintel.net" } },
        res,
      );
      expect(res.statusCode).toBe(200);
      expect(JSON.parse(res.text())).toMatchObject({ days: 14, unavailable: true, series: [] });
    } finally {
      if (prevUrl === undefined) delete process.env.SUPABASE_URL;
      else process.env.SUPABASE_URL = prevUrl;
      if (prevKey === undefined) delete process.env.SUPABASE_SERVICE_KEY;
      else process.env.SUPABASE_SERVICE_KEY = prevKey;
    }
  });

  it("reads the authorization header from a plain Node header map", async () => {
    const res = mockRes();
    await guestPulseQueue(
      {
        method: "GET",
        url: "/api/guest-pulse-queue?status=received",
        headers: { host: "hoopsintel.net" },
      },
      res,
    );
    expect(res.statusCode).toBe(401);
    expect(JSON.parse(res.text())).toEqual({ error: "Unauthorized" });
  });

  it("reads intake JSON and x-forwarded-for from a Node request", async () => {
    const res = mockRes();
    await contactIntake(
      {
        method: "POST",
        url: "/api/contact-intake",
        headers: {
          host: "hoopsintel.net",
          "content-type": "application/json",
          "x-forwarded-for": "203.0.113.10, 10.0.0.1",
        },
        readableEnded: true,
        body: { kind: "general", message: "short" },
      },
      res,
    );
    expect(res.statusCode).toBe(400);
    expect(JSON.parse(res.text())).toEqual({ error: "Please add more detail (10+ chars)." });
  });

  it("reads stripe-signature off a plain Node header map", async () => {
    const prevKey = process.env.STRIPE_SECRET_KEY;
    const prevSecret = process.env.STRIPE_WEBHOOK_SECRET;
    process.env.STRIPE_SECRET_KEY = "sk_test_node_adapter";
    process.env.STRIPE_WEBHOOK_SECRET = "whsec_node_adapter";
    try {
      const res = mockRes();
      await stripeWebhook(
        {
          method: "POST",
          url: "/api/stripe-webhook",
          headers: {
            host: "hoopsintel.net",
            "content-type": "application/json",
            "stripe-signature": "t=1,v1=not-a-real-signature",
          },
          readableEnded: true,
          body: JSON.stringify({ id: "evt_test", type: "customer.subscription.updated" }),
        },
        res,
      );
      expect(res.statusCode).toBe(400);
      expect(res.text()).toContain("Signature verification failed");
    } finally {
      if (prevKey === undefined) delete process.env.STRIPE_SECRET_KEY;
      else process.env.STRIPE_SECRET_KEY = prevKey;
      if (prevSecret === undefined) delete process.env.STRIPE_WEBHOOK_SECRET;
      else process.env.STRIPE_WEBHOOK_SECRET = prevSecret;
    }
  });
});
