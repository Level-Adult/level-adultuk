// Minimal sw.js for GitHub Pages PWA
const CACHE_NAME = 'level-adultuk-v4';

self.addEventListener('install', () => {
    self.skipWaiting();
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => response || fetch(event.request))
    );
});
