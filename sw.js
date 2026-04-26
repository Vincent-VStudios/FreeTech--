// FreeTech 灵感库 - Service Worker
const CACHE_NAME = 'freetech-v1';
const urlsToCache = [
  '/FreeTech--/',
  '/FreeTech--/index.html',
  '/FreeTech--/styles.css',
  '/FreeTech--/app.js',
  '/FreeTech--/manifest.json'
];

// 安装时缓存核心资源
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
      .then(() => self.skipWaiting())
  );
});

// 激活时清理旧缓存
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      );
    }).then(() => self.clients.claim())
  );
});

// 网络优先，离线回退缓存
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // 网络成功，更新缓存
        if (response.status === 200) {
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone);
          });
        }
        return response;
      })
      .catch(() => {
        // 网络失败，回退缓存
        return caches.match(event.request).then((response) => {
          if (response) {
            return response;
          }
          // 缓存也没有，返回离线页面
          if (event.request.mode === 'navigate') {
            return caches.match('/FreeTech--/index.html');
          }
        });
      })
  );
});
