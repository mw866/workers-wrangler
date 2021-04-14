/*
Dynamically generated mocha + chai tests.
*/

const TESTS = require('./unit-test-cases.json')
const ENV = process.env.ENVIRONMENT_NAME.toLowerCase()
const ALLOWED_ENVS = ['staging']

const chai = require('chai')
const expect = chai.expect
const generateCf = require('../src/cf.js')

describe('Unit tests', function() {
  before('Check environment', function() {
    if (!(ALLOWED_ENVS.includes(ENV))) this.skip()
  })

  TESTS[ENV].forEach(function (test) {
    const requestURL = new URL(test.url)
    it(test.url, async function () {
      const cf = await generateCf(requestURL)
      expect(cf, 'cf object in Workers subrequest').to.deep.equal(test.cf)
    })
  })
})
