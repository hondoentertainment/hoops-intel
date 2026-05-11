import Anthropic from "@anthropic-ai/sdk";

export const config = { runtime: "nodejs22.x" };

const SYSTEM_PROMPT = `You are the Hoops Intel AI assistant — an expert NBA analyst with the editorial voice of ESPN meets The Athletic. Answer questions using the provided context from Hoops Intel's daily editions. Be concise, opinionated, and data-driven. If the context doesn't contain enough info to answer, say so honestly. Never make up stats or game results.`;

const CORS_HEADERS: Record<string, string> = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, X-RateLimit",
};

// Simple in-memory rate limit (per-edge-instance)
const rateLimitMap = new Map<string, number>();
const RATE_LIMIT_MS = 3000; // 3 second cooldown

export default async function handler(req: Request) {
  // Handle preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: CORS_HEADERS });
  }

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
    });
  }

  // Rate limit check via header
  const clientId = req.headers.get("X-RateLimit") || "anonymous";
  const lastRequest = rateLimitMap.get(clientId);
  const now = Date.now();
  if (lastRequest && now - lastRequest < RATE_LIMIT_MS) {
    return new Response(JSON.stringify({ error: "Too many requests. Please wait a few seconds." }), {
      status: 429,
      headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
    });
  }
  rateLimitMap.set(clientId, now);

  // Parse body
  let question: string;
  let context: string;
  try {
    const body = (await req.json()) as {
      question?: string;
      context?: string;
    };
    question = body.question ?? "";
    context = body.context ?? "";
  } catch {
    return new Response(JSON.stringify({ error: "Invalid JSON body" }), {
      status: 400,
      headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
    });
  }

  // Validate
  if (!question || typeof question !== "string") {
    return new Response(JSON.stringify({ error: "Question is required" }), {
      status: 400,
      headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
    });
  }
  if (question.length > 500) {
    return new Response(JSON.stringify({ error: "Question too long (max 500 characters)" }), {
      status: 400,
      headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
    });
  }

  // Check API key
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return new Response(JSON.stringify({ error: "API key not configured" }), {
      status: 500,
      headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
    });
  }

  try {
    const client = new Anthropic({ apiKey });

    const userMessage = context
      ? `Context from Hoops Intel data:\n\n${context}\n\nQuestion: ${question}`
      : `Question: ${question}`;

    // Use streaming
    const stream = await client.messages.stream({
      model: "claude-sonnet-4-6",
      max_tokens: 1024,
      system: SYSTEM_PROMPT,
      messages: [{ role: "user", content: userMessage }],
    });

    // Convert to ReadableStream for streaming response
    const encoder = new TextEncoder();
    const readable = new ReadableStream({
      async start(controller) {
        try {
          for await (const event of stream) {
            if (
              event.type === "content_block_delta" &&
              event.delta.type === "text_delta"
            ) {
              controller.enqueue(encoder.encode(event.delta.text));
            }
          }
          controller.close();
        } catch (err) {
          controller.error(err);
        }
      },
    });

    return new Response(readable, {
      status: 200,
      headers: {
        ...CORS_HEADERS,
        "Content-Type": "text/plain; charset=utf-8",
        "Transfer-Encoding": "chunked",
        "Cache-Control": "no-cache",
      },
    });
  } catch (err: any) {
    return new Response(
      JSON.stringify({ error: err.message || "Failed to generate response" }),
      {
        status: 500,
        headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
      }
    );
  }
}
