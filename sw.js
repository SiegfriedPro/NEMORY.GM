self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('nemory-store').then(function(cache) {
      return cache.addAll([
        'intro.html',
        'main.html',
        'nemory.html',
        'style.css',
        'icon.png',
        'startup.mp3'
      ]);
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});