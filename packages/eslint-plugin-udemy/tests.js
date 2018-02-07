'use strict';

const fs = require('fs');
const path = require('path');

// eslint-disable-next-line no-console
console.log('test eslint-plugin-udemy');

const tests = fs.readdirSync(path.resolve(__dirname, 'rules')).map(f => `${f}/tests.js`);
// eslint-disable-next-line import/no-dynamic-require
tests.forEach(test => require(`./rules/${test}`));
