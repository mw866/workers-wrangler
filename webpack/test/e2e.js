/*
Dynamically generated mocha + chai tests.
https://mochajs.org/#dynamically-generating-tests
https://www.chaijs.com/plugins/chai-http/
*/

const ENV = process.env.ENVIRONMENT_NAME.toLowerCase()
const ALLOWED_ENVS = ['staging']

const chai = require('chai')
const chaiHttp = require('chai-http')
chai.use(chaiHttp)
const expect = chai.expect

const BASEURL = { staging: 'https://nginx.chriswang.me' }

const TESTS = require('./e2e-test-cases.json')

describe('End-to-End tests', function () {
  before('Check environment', function() {
    if (!(ALLOWED_ENVS.includes(ENV))) {
      this.skip()
    }
  })

  TESTS[ENV].forEach(function (test) {
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
