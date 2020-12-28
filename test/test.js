/*
Dynamically generated mocha + chai tests.
https://mochajs.org/#dynamically-generating-tests
https://www.chaijs.com/plugins/chai-http/
*/

let chai = require('chai')
const chaiHttp = require('chai-http')
chai.use(chaiHttp)
const expect = chai.expect
const ENV = process.env.ENVIRONMENT_NAME

const BASEURL = {staging: 'https://nginx.chriswang.me'}
const TESTS = [
  { path: '/status/200.invalid', status: 200, cacheStatus: 'DYNAMIC' },
  { path: '/status/200.css', status: 200, cacheStatus: 'HIT' },
  { path: '/status/404.invalid', status: 404, cacheStatus: 'HIT' },
  { path: '/status/404.css', status: 404, cacheStatus: 'HIT' }
]

describe('Dynmically generated tests', function () {
  TESTS.forEach(function (test) {
    it(BASEURL[ENV] + test.path, function (done) {
      chai.request(BASEURL[ENV])
      .get(test.path)
      .end(function (err, res) {
        expect(res, 'response status code').to.have.status(test.status)
        expect(res, 'cf-cache-status response header').to.have.header('cf-cache-status', test.cacheStatus)
        done()
      })
    })
  })
})