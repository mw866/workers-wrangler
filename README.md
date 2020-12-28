# Demo Cloudflare Wrangler project

This is a demo Cloudflare Workers environment, which
* emphasizes on proper testing using Mocha and Chai
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
npm run publish --env=staging
npm test --env=staging 
```

## TODOs
To incorporate `wrangler dev` pending the [bug](https://github.com/cloudflare/wrangler/issues/1681).