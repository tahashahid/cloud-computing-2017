var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
  '/',
  '/vendor/bootstrap/css/bootstrap.min.css',
  '/vendor/font-awesome/css/font-awesome.min.css',
  '/vendor/simple-line-icons/css/simple-line-icons.css',
  '/device-mockups/device-mockups.min.css',
  '/css/new-age.min.css',

  '/vendor/jquery/jquery.min.js',
  '/vendor/bootstrap/js/bootstrap.bundle.min.js',
  '/vendor/jquery-easing/jquery.easing.min.js',
  '/js/new-age.min.js',

  '/img/google-play-badge.svg',
  '/img/app-store-badge.svg',
  '/img/bg-pattern.png',
  '/device-mockups/iphone_6_plus/iphone_6_plus_white_port.png',
  '/vendor/simple-line-icons/fonts/Simple-Line-Icons.woff2?v=2.4.0',
  '/img/bg-cta.jpg',
  '/img/demo-screen-1.jpg',
  '/img/google-play-badge.svg',
  '/img/app-store-badge.svg',
  

];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request)
        .then(function(response) {
          // Cache hit - return response
          if (response) {
            return response;
          }
  
          // IMPORTANT: Clone the request. A request is a stream and
          // can only be consumed once. Since we are consuming this
          // once by cache and once by the browser for fetch, we need
          // to clone the response.
          var fetchRequest = event.request.clone();
  
          return fetch(fetchRequest).then(
            function(response) {
              // Check if we received a valid response
              if(!response || response.status !== 200 || response.type !== 'basic') {
                return response;
              }
  
              // IMPORTANT: Clone the response. A response is a stream
              // and because we want the browser to consume the response
              // as well as the cache consuming the response, we need
              // to clone it so we have two streams.
              var responseToCache = response.clone();
  
              caches.open(CACHE_NAME)
                .then(function(cache) {
                  cache.put(event.request, responseToCache);
                });
  
              return response;
            }
          );
        })
      );
  });



self.addEventListener('activate', function(event) {

    var cacheWhitelist = [CACHE_NAME];

    event.waitUntil(
    caches.keys().then(function(cacheNames) {
        return Promise.all(
        cacheNames.map(function(cacheName) {
            if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
            }
        })
        );
    })
    );
});