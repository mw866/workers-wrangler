addEventListener('fetch', event => {
  event.respondWith(handleRequest(event))
})

async function handleRequest(event) {
  const request = event.request
  const url = new URL(request.url)
  const cacheKey = new Request(url.toString(), request)
  const cache = caches.default

  let response = await cache.match(cacheKey)
  if (!response) {
    response = new Response(new Date().toString(), {
      status: 200
    })
    event.waitUntil(cache.put(cacheKey, response.clone()))
  }
  return response
}
