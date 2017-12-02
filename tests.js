'use strict';

const fs = require('fs');
const path = require('path');

const tests = fs.readdirSync(path.resolve(__dirname, 'packages')).map(f => `${f}/tests.js`);

// eslint-disable-next-line import/no-dynamic-require
tests.forEach(test => require(`./packages/${test}`));
