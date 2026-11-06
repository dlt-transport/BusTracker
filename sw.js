self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
  // จำเป็นต้องมี fetch handler เพื่อให้ Chrome อนุมัติป๊อปอัปติดตั้ง PWA
});
