// Minimal service worker — required for PWA/TWA installability checks.
// This app always needs a live connection to Supabase to save/sync checklist
// data, so we deliberately do NOT cache pages or API responses: every request
// just goes straight to the network. This only exists so the app qualifies as
// an installable PWA (and, from there, a packaged Android app via PWABuilder).
self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", (event) => {
  event.respondWith(fetch(event.request));
});
