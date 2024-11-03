self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('static').then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/manifest.json',
        '/android-chrome-192x192.png',
        '/android-chrome-512x512.png',
      ])
    })
  )
})

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request)
    })
  )
})
