/* R&J Lancashire & Yorkshire: network-fresh catalogue HTML, without caching large PP images. */
const RJ_SW_BUILD='yorkshire-fresh-2026-11-01';
self.addEventListener('install',event=>{self.skipWaiting()});
self.addEventListener('activate',event=>{event.waitUntil(self.clients.claim())});
self.addEventListener('fetch',event=>{
  const request=event.request;
  if(request.mode === 'navigate'){
    event.respondWith(fetch(request,{cache:'no-cache'}));
  }
});
