const generateCf = require('./src/cf.js')

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest (request) {
  const requestURL = new URL(request.url)
  const cfBlob = await generateCf(requestURL)
  const edgeResponse = await fetch(requestURL, request, { cf: cfBlob })
  return edgeResponse
}

