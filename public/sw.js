// Hoops Intel Service Worker — network-first shell, cached static/edition chunks
const CACHE_NAME = "hoops-intel-v5";
const STATIC_ASSETS = ["/manifest.json", "/assets/logo.png"];

/** Edition data chunks — hashed filenames still match these prefixes after build. */
const EDITION_CHUNK =
  /\/assets\/(pulseData|archiveData|playoffData|lineMovementData|sentimentData|watchGuideData|communityPulseData|historyData)-/;

const STATIC_EXT = /\.(js|css|woff2?|png|webp|svg|json|ico)$/;

function isSameOrigin(url) {
  return url.origin === self.location.origin;
}

async function cacheFirst(request) {
  const cached = await caches.match(request);
  if (cached) return cached;
  const response = await fetch(request);
  if (response.ok) {
    const cache = await caches.open(CACHE_NAME);
    await cache.put(request, response.clone());
  }
  return response;
}

async function networkFirstNavigate(request) {
  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(CACHE_NAME);
      await cache.put(request, response.clone());
    }
    return response;
  } catch {
    const cached = await caches.match(request);
    if (cached) return cached;
    const shell = await caches.match("/index.html");
    return shell || Response.error();
  }
}

/** Prefer network for hashed bundles so deploys recover without serving stale HTML as JS. */
async function networkFirstAsset(request) {
  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(CACHE_NAME);
      await cache.put(request, response.clone());
      return response;
    }
    const cached = await caches.match(request);
    return cached || response;
  } catch {
    const cached = await caches.match(request);
    if (cached) return cached;
    throw new Error("asset fetch failed");
  }
}

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(STATIC_ASSETS)),
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))),
    ),
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  const { request } = event;
  const url = new URL(request.url);

  if (!isSameOrigin(url)) {
    if (url.hostname.includes("espn.com")) {
      event.respondWith(fetch(request));
    }
    return;
  }

  const path = url.pathname;

  // Always fetch fresh HTML shell after deploys (avoid stale index → missing chunk loops).
  if (request.mode === "navigate" || path === "/" || path === "/index.html") {
    event.respondWith(networkFirstNavigate(request));
    return;
  }

  if (EDITION_CHUNK.test(path) || STATIC_EXT.test(path)) {
    event.respondWith(networkFirstAsset(request));
    return;
  }
});

// ═══════════════════════════════════════════════════════════
// WEB PUSH NOTIFICATIONS
// ═══════════════════════════════════════════════════════════

self.addEventListener("push", (event) => {
  let data = { title: "Hoops Intel", body: "New edition available!", url: "/" };
  try {
    data = event.data?.json() ?? data;
  } catch {
    // use defaults
  }

  const options = {
    body: data.body,
    icon: "/assets/logo.png",
    badge: "/assets/logo.png",
    tag: "hoops-intel-update",
    renotify: true,
    data: { url: data.url || "/" },
    actions: [
      { action: "open", title: "Read Now" },
      { action: "dismiss", title: "Dismiss" },
    ],
  };

  event.waitUntil(self.registration.showNotification(data.title, options));
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  if (event.action === "dismiss") return;

  const url = event.notification.data?.url || "/";
  event.waitUntil(
    clients.matchAll({ type: "window", includeUncontrolled: true }).then((windowClients) => {
      for (const client of windowClients) {
        if (client.url.includes("hoopsintel.net") && "focus" in client) {
          client.navigate(url);
          return client.focus();
        }
      }
      return clients.openWindow(url);
    }),
  );
});
