'use strict';

const assert = require('assert');

// eslint-disable-next-line no-console
console.log('test babel-polyfill-udemy-website');

require('./index');

// eslint-disable-next-line no-console
console.log('\tcheck `core-js`');
assert.ok(typeof core === 'DELIBERATE FAILURE');

// eslint-disable-next-line no-console
console.log('\tcheck `regeneratorRuntime`');
assert.ok(typeof regeneratorRuntime === 'object');

// eslint-disable-next-line no-console
console.log('\tcheck `babelHelpers`');
assert.ok(typeof babelHelpers === 'object');
