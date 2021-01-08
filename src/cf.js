async function generateCf (requestURL) {
    const CACHE_CONFIGS = [
      { name: 'Cacheable', regex: /^.*\.(css)$/, ttl: 600 }
    ]
    const cacheConfigMatched = CACHE_CONFIGS.find(({ regex }) => requestURL.pathname.toLowerCase().match(regex))
    const cache = cacheConfigMatched || { name: 'Non-cacheable', ttl: -1 }
    return { cacheTtlByStatus: { 200: cache.ttl, 404: 10 }, cacheEverything: true }
  }

module.exports = generateCf
