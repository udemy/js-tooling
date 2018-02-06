'use strict';

const assert = require('assert');

require('./index');

// eslint-disable-next-line no-console
console.log('check `core-js`');
assert.ok(typeof core === 'object');

// eslint-disable-next-line no-console
console.log('check `regeneratorRuntime`');
assert.ok(typeof regeneratorRuntime === 'object');

// eslint-disable-next-line no-console
console.log('check `babelHelpers`');
assert.ok(typeof babelHelpers === 'object');
