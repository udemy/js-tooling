'use strict';

const eslintConfigTester = require('eslint-config-tester');
const path = require('path');

eslintConfigTester.runOnText(
    path.resolve(__dirname, 'index.js'),
    "const hello = 'world';\nexport default hello;\n"
);
