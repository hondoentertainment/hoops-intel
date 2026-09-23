import type { IncomingHttpHeaders } from "node:http";

/**
 * Vercel invokes `export default function (req, res)` on the Node runtime with
 * Node's IncomingMessage. `req.headers` is a plain object, so Fetch-style
 * `req.headers.get` throws, and a returned Web Response is discarded (the
 * invocation 500s or hangs). Handlers stay on the Fetch API; this adapter
 * accepts either shape and writes the Response onto the Node response.
 */

type HeaderSource = IncomingHttpHeaders | Headers | Record<string, string | string[] | undefined>;

export type NodeLikeRequest = {
  method?: string;
  url?: string;
  headers?: HeaderSource;
  body?: unknown;
  /** Set when the raw stream was already consumed (Vercel pre-parsed body). */
  readableEnded?: boolean;
  on?: (event: string, listener: (...args: never[]) => void) => unknown;
};

export type NodeLikeResponse = {
  writeHead: (status: number, headers?: Record<string, string | string[] | number>) => void;
  write: (chunk: Uint8Array | string) => boolean;
  end: (chunk?: Uint8Array | string) => void;
  once?: (event: string, listener: () => void) => void;
};

const HOP_BY_HOP = new Set(["transfer-encoding", "connection", "keep-alive", "content-length"]);

function isWebRequest(value: unknown): value is Request {
  return typeof Request !== "undefined" && value instanceof Request;
}

function headersToFetch(source: HeaderSource | undefined): Headers {
  const headers = new Headers();
  if (!source) return headers;
  if (typeof (source as Headers).forEach === "function" && typeof (source as Headers).get === "function") {
    (source as Headers).forEach((value, key) => {
      headers.append(key, value);
    });
  } else {
    for (const [key, value] of Object.entries(source as Record<string, string | string[] | undefined>)) {
      if (value == null) continue;
      headers.append(key, Array.isArray(value) ? value.join(", ") : String(value));
    }
  }
  for (const hop of HOP_BY_HOP) headers.delete(hop);
  return headers;
}

function encodeParsedBody(body: unknown): Uint8Array | undefined {
  if (body == null || body === "") return undefined;
  if (typeof body === "string") return Buffer.from(body);
  if (body instanceof Uint8Array) return body;
  return Buffer.from(JSON.stringify(body));
}

function readStream(req: NodeLikeRequest): Promise<Uint8Array> {
  return new Promise((resolve, reject) => {
    const chunks: Buffer[] = [];
    req.on!("data", ((chunk: Buffer | string) => {
      chunks.push(typeof chunk === "string" ? Buffer.from(chunk) : Buffer.from(chunk));
    }) as (...args: never[]) => void);
    req.on!("end", (() => {
      resolve(Buffer.concat(chunks));
    }) as (...args: never[]) => void);
    req.on!("error", ((err: unknown) => {
      reject(err instanceof Error ? err : new Error(String(err)));
    }) as (...args: never[]) => void);
  });
}

async function readNodeBody(req: NodeLikeRequest): Promise<Uint8Array | undefined> {
  // Prefer the raw stream so signature checks (Stripe) see the original bytes.
  // Fall back to Vercel's parsed `req.body` only after the stream is spent.
  if (typeof req.on === "function" && req.readableEnded !== true) {
    const raw = await readStream(req);
    if (raw.byteLength > 0) return raw;
    return undefined;
  }
  return encodeParsedBody(req.body);
}

export async function nodeToWebRequest(req: NodeLikeRequest): Promise<Request> {
  const headers = headersToFetch(req.headers);
  const host = headers.get("x-forwarded-host") ?? headers.get("host") ?? "localhost";
  const proto = (headers.get("x-forwarded-proto") ?? "https").split(",")[0]!.trim() || "https";
  const rawUrl = req.url && req.url.length > 0 ? req.url : "/";
  const url = /^https?:\/\//i.test(rawUrl)
    ? rawUrl
    : `${proto}://${host}${rawUrl.startsWith("/") ? rawUrl : `/${rawUrl}`}`;

  const method = (req.method ?? "GET").toUpperCase();
  const init: RequestInit = { method, headers };
  if (method !== "GET" && method !== "HEAD") {
    const body = await readNodeBody(req);
    if (body && body.byteLength > 0) {
      const copy = new ArrayBuffer(body.byteLength);
      new Uint8Array(copy).set(body);
      init.body = copy;
      // Don't touch req.body here — its getter may re-read a spent stream.
      if (!headers.has("content-type")) {
        const head = Buffer.from(body.subarray(0, 1)).toString("utf8");
        if (head === "{" || head === "[") headers.set("content-type", "application/json");
      }
    }
  }
  return new Request(url, init);
}

export async function writeNodeResponse(res: NodeLikeResponse, response: Response): Promise<void> {
  const headers: Record<string, string> = {};
  response.headers.forEach((value, key) => {
    if (HOP_BY_HOP.has(key.toLowerCase())) return;
    headers[key] = value;
  });
  res.writeHead(response.status, headers);
  if (!response.body) {
    res.end();
    return;
  }
  const reader = response.body.getReader();
  try {
    for (;;) {
      const { done, value } = await reader.read();
      if (done) break;
      if (!value || value.byteLength === 0) continue;
      const ok = res.write(Buffer.from(value));
      if (ok === false && typeof res.once === "function") {
        await new Promise<void>((resolve) => {
          res.once!("drain", () => resolve());
        });
      }
    }
    res.end();
  } catch (err) {
    try {
      res.end();
    } catch {
      /* socket already closed */
    }
    throw err;
  }
}

export function adaptNodeHandler(handler: (req: Request) => Promise<Response> | Response) {
  return async function vercelNodeHandler(
    req: Request | NodeLikeRequest,
    res?: NodeLikeResponse,
  ): Promise<Response | void> {
    const request = isWebRequest(req) ? req : await nodeToWebRequest(req);
    const response = await handler(request);
    if (res && typeof res.writeHead === "function") {
      await writeNodeResponse(res, response);
      return;
    }
    return response;
  };
}
