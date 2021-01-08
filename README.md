# Demo Cloudflare Wrangler project

This is a demo Cloudflare Workers environment, which
* emphasizes on proper testing using [Mocha](https://mochajs.org/) and [Chai](https://www.chaijs.com/)
* supports E2E testing not just on Workers but other other Cloudflare features
* supports multiple environment (e.g. stating, prod)
* (Potentially) is friendly to CI/CD workflow

## Installation

```
npm i -g @cloudflare/wrangler 
cd <DIRECTORY_NAME>
npm i 
```

## Quick Start

```
npm run deploy --env=staging
npm test --env=staging 
```

## TODOs
To incorporate `wrangler dev` pending the [bug](https://github.com/cloudflare/wrangler/issues/1681).

## Reference

[How to run Mocha/Chai tests on Node.js apps](https://buddy.works/guides/how-automate-nodejs-unit-tests-with-mocha-chai)

[HOW TO: use environment variables](https://github.com/mochajs/mocha/wiki/HOW-TO:-use-environment-variables)

[Mocha inclusive tests](https://mochajs.org/#inclusive-tests)

[Testing Cloudflare workers](https://hodovi.ch/blog/testing-cloudflare-workers/)