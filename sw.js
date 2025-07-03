self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('autofix-cache').then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        '/assets/css/style.css',
        '/assets/js/script.js',
        // Add other assets as needed
      ]);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
