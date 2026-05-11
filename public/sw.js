// Hoops Intel Service Worker — Cache-first for static assets, network-first for navigation
// Do not precache "/" — deploys change hashed bundle names; a stale shell breaks loads when offline fallback runs.
const CACHE_NAME = "hoops-intel-v3";
const STATIC_ASSETS = ["/manifest.json", "/assets/logo.png"];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(STATIC_ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  const { request } = event;
  // Network-first for API calls and navigation
  if (request.url.includes("espn.com") || request.mode === "navigate") {
    event.respondWith(
      fetch(request).catch(async () => {
        const cached = await caches.match(request);
        if (cached) return cached;
        const shell = await caches.match("/");
        return shell || Response.error();
      })
    );
    return;
  }
  // Cache-first for static assets
  event.respondWith(
    caches.match(request).then((cached) => cached || fetch(request))
  );
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
    })
  );
});
