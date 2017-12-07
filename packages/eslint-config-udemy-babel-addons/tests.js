'use strict';

const eslintConfigTester = require('eslint-config-tester');
const path = require('path');

eslintConfigTester.runOnText(
    path.resolve(__dirname, 'index.js'),
    // This is a minimal JS code, just to make sure config has no errors.
    "const hello = 'world';\nexport default hello;\n"
);
