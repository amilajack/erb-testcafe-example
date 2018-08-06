erb-testcafe-example
====================

[![Build Status](https://travis-ci.org/amilajack/erb-testcafe-example.svg?branch=master&maxAge=2592)](https://travis-ci.org/amilajack/erb-testcafe-example)

`testcafe` is a modern e2e solution.

It is faster, less brittle, and much more modern than spectron (which uses selenium behind the scenes).
This is an experiment to get [testcafe](https://github.com/DevExpress/testcafe) workign with [erb](https://github.com/chentsulin/electron-react-boilerplate).

## Setup
```bash
git clone https://github.com/amilajack/erb-testcafe-example
cd erb-testcafe-example
yarn
# Build the main and renderer processes for the e2e environment
yarn build-e2e
# Run the e2e tests
yarn test-e2e
# Run e2e tests in "watch" mode
yarn test-e2e-live
```

## Notable Changes
If you want to add testcafe for your own erb project, see [these changes](https://github.com/amilajack/erb-testcafe-example/commit/3c4ba5dfeaeedf7e7c4b741b6120131c32832ff5)
