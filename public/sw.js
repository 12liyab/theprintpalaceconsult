const CACHE_NAME = 'tppc-v1';
const urlsToCache = [
  '/',
  '/about',
  '/products',
  '/pricing',
  '/help',
  '/static/js/bundle.js',
  '/static/css/main.css',
  '/lovable-uploads/5c20975a-b428-4aa0-9d78-93b4b9969e22.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version or fetch from network
        return response || fetch(event.request);
      })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});