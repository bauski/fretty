const cacheName = 'fretty.cache.0.02';
var urlsToCache = [
    '/',
    '/modules/colors.js',
    '/modules/display.js',
    '/modules/eventHandler.js',
    '/modules/fret.js',
    '/modules/fretStore.js',
    '/modules/music.js',
    '/modules/observer.js',
    '/index.html',
    '/main.js',
    '/assets/fretboard.css'
];

self.addEventListener('install', event => {
    // Perform install steps
    event.waitUntil(
        caches.open(cacheName)
        .then(cache => {
            console.log('Opened cache');
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener('activate', event => {
    console.log('sw activated');
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    if(cache !== cacheName) {
                        return caches.delete(cache);
                    }
                })
            )
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // Cache hit - return response
                return response || fetch(event.request);
            })
    );
});
