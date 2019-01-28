'use strict';

const eslintConfigTester = require('eslint-config-tester');
const path = require('path');

// eslint-disable-next-line no-console
console.log('test eslint-config-udemy-basics');

eslintConfigTester.runOnText(
    path.resolve(__dirname, 'index.js'),
    // This is a minimal JS code, just to make sure config has no errors.
    "'use strict';\nmodule.exports = {hello: 'world'};\n",
);
