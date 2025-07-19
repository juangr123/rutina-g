
self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("rutina-juan-cache").then(cache => {
      return cache.addAll([
        "/index.html",
        "/dia1.html",
        "/dia2.html",
        "/dia3.html",
        "/casa.html"
      ]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
