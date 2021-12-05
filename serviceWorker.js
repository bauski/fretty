const cacheName = 'fretty.cache.0.02';

self.addEventListener('activate', event => {
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
    if(!event.request.url.startsWith('http')){
        event.respondWith(
            fetch(event.request)
                .then(response => {
                    const appClone = response.clone();
                    caches
                        .open(cacheName)
                        .then(cache => {
                            cache.put(event.request, appClone);
                        });
                    return response;
                })
        );
    }
});
