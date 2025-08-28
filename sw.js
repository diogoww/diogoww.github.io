const CACHE_NAME = 'diogow-portfolio-v2';
const PRECACHE_URLS = [
  '/',
  '/index.html',
  '/styles/style.css',
  '/styles/header.css',
  '/styles/home.css',
  '/styles/about.css',
  '/styles/tech.css',
  '/styles/footer.css',
  '/javascript/script.js',
  '/src/images/eu.png',
  '/src/images/wave.svg',
  '/src/images/icons/java-icon.png',
  '/src/images/icons/csharp-icon.png',
  '/src/images/icons/javascript-icon.png',
  '/src/images/icons/php-icon.png',
  '/src/images/icons/python-logo.png',
  '/src/images/icons/react-icon.png',
  '/src/images/icons/typescript-logo.png',
  '/src/images/icons/html-logo.png',
  '/src/images/icons/css-icon.png',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css',
  'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js',
  'https://unpkg.com/scrollreveal',
  'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'
];

self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(PRECACHE_URLS);
    })
  );
});

// Strategy:
// - HTML navigations: network-first (fresh content), fallback to cache if offline
// - Other assets: stale-while-revalidate
self.addEventListener('fetch', event => {
  const request = event.request;

  // Handle navigations (HTML)
  const isNavigation = request.mode === 'navigate' ||
    (request.method === 'GET' && request.headers.get('accept')?.includes('text/html'));

  if (isNavigation) {
    event.respondWith(
      fetch(request)
        .then(response => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(request, copy));
          return response;
        })
        .catch(() => caches.match(request).then(res => res || caches.match('/index.html')))
    );
    return;
  }

  // Stale-while-revalidate for other requests
  event.respondWith(
    caches.match(request).then(cachedResponse => {
      const fetchPromise = fetch(request)
        .then(networkResponse => {
          const copy = networkResponse.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(request, copy));
          return networkResponse;
        })
        .catch(() => cachedResponse);

      return cachedResponse || fetchPromise;
    })
  );
});


self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
}); 