const CACHE_NAME = "blueberry-cache-v1";
const CACHE_URLS = [
  "/",
  "../js/main-bundled.js",
  "../public/index.js",
  "../public/sw.js",
  "../public/api.js",
  "../public/index.html",
  "../public/index.css",
  "../favicon.ico",
];

this.addEventListener("install", (event) => {
  console.log("Installing Service Worker");
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(CACHE_URLS);
    }),
  );
});

this.addEventListener("activate", (event) => {
  console.log("Activating Service Worker");
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      if (navigator.onLine) {
        console.log("Updating Service Worker");
        return cache.addAll(CACHE_URLS);
      }
    }),
  );
});

this.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        console.log("Returning cached data");
        return cachedResponse;
      }
      console.log("Fetching new data");
      return fetch(event.request);
    }),
  );
});
