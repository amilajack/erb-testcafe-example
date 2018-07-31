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
# Run e2e tests
yarn test-e2e
# Watch mode for e2e tests
yarn test-e2e
```

## Notable Changes
If you want to add testcafe for your own erb project, see these changes
* [Initial testcafe infra setup](https://github.com/amilajack/erb-testcafe-example/commit/3c4ba5dfeaeedf7e7c4b741b6120131c32832ff5)
* [Migrate all spectron tests to testcafe](https://github.com/amilajack/erb-testcafe-example/commit/5685040b672d8df12a5ad90f37b0ca2e051e70a9)
