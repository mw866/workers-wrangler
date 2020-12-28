addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest (request) {
  const requestURL = new URL(request.url)
  const CACHE_CONFIGS = [
    { name: 'Cacheable', regex: /^.*\.(css)$/, ttl: 600 }
  ]
  const cacheConfigMatched = CACHE_CONFIGS.find(({ regex }) => requestURL.pathname.toLowerCase().match(regex))
  const cache = cacheConfigMatched || { name: 'Non-cacheable', ttl: -1 }
  const edgeResponse = await fetch(requestURL, request, { cf: { cacheTtlByStatus: { 200: cache.ttl, 404: 10 }, cacheEverything: true} })
  return edgeResponse
}
