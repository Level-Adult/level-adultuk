const CACHE_NAME = 'level-adultuk-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/styles.css'
  // Add more important files here later (e.g. your guide images)
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
