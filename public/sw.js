const CACHE_NAME = "blueberry-cache-v1";
const CACHE_URLS = [
  "/",
  "js/main-bundled.js",
  "public/index.js",
  "public/sw.js",
  "public/api.js",
  "public/index.html",
  "public/index.css",
  "favicon.ico",
];

this.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(CACHE_URLS);
    }),
  );
});

this.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request);
    }),
  );
});
