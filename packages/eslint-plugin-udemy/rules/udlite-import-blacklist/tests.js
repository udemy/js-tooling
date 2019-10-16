'use strict';

const RuleTester = require('eslint').RuleTester;
const path = require('path');

const rule = require('./index').rules['udlite-import-blacklist'];

const ruleTester = new RuleTester({
    parserOptions: {
        ecmaVersion: 2015,
        sourceType: 'module',
    },
});

const options = [
    [
        {
            source: 'heavyweight-lib',
            message: 'UDLite files may not import Heavyweight lib:',
        },
    ],
];

ruleTester.run('udlite-import-blacklist', rule, {
    valid: [
        {
            code: "import 'lightweight-lib';",
            filename: path.join(__dirname, 'js/udlite/example.js'),
            options,
        },
        {
            code: "import 'heavyweight-lib';",
            filename: path.join(__dirname, 'js/udheavy/example.js'),
            options,
        },
        {
            code: "import 'heavyweight-lib';",
            filename: path.join(__dirname, 'js/udlite/example.spec.js'),
            options,
        },
    ],
    invalid: [
        {
            code: "import 'heavyweight-lib';",
            errors: [
                {
                    message: 'UDLite files may not import Heavyweight lib:\nheavyweight-lib\n',
                },
            ],
            filename: path.join(__dirname, 'js/udlite/example.js'),
            options,
        },
    ],
});
