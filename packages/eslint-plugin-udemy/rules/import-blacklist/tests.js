'use strict';

const path = require('path');
const rule = require('./index').rules['import-blacklist'];
const RuleTester = require('eslint').RuleTester;

const ruleTester = new RuleTester({
    parserOptions: {
        ecmaVersion: 2015,
        sourceType: 'module',
    },
});

const options = [[
    {
        pattern: '^apple(?:\\.js)?$',
        message: 'Please import from fruit/apple/, not from apple',
        exceptions: ['fruit/apple(?:\\.spec)?\\.js$'],
    },
    {
        pattern: '^grape/lib/grape(?:\\.js)?$',
        message: 'Please import from grape, not from grape/lib/grape',
    },
    {
        pattern: '^lemon(?:\\.js)?$',
        message: 'Please import from e.g. lemon/lib/foo, not from lemon directly',
    },
    {
        pattern: '^lemon.*?$',
        message: 'Please import from lime/, not from lemon/',
        exceptions: ['/lime/'],
    },
]];

ruleTester.run('import-blacklist', rule, {
    valid: [
        {
            code: "import apple from 'apple.js';",
            filename: path.join(__dirname, 'fruit/apple.js'),
            options,
        },
        {
            code: "import apple from 'apple';",
            filename: path.join(__dirname, 'fruit/apple.js'),
            options,
        },
        {
            code: "import grape from 'grape';",
            filename: path.join(__dirname, 'example.js'),
            options,
        },
        {
            code: "import foo from 'lemon/lib/foo';",
            filename: path.join(__dirname, 'lime/example.js'),
            options,
        },
    ],
    invalid: [
        {
            code: "import apple from 'apple.js';",
            errors: [{ message: 'Please import from fruit/apple/, not from apple' }],
            filename: path.join(__dirname, 'example.js'),
            options,
        },
        {
            code: "import apple from 'apple';",
            errors: [{ message: 'Please import from fruit/apple/, not from apple' }],
            filename: path.join(__dirname, 'example.js'),
            options,
        },
        {
            code: "import grape from 'grape/lib/grape';",
            errors: [{ message: 'Please import from grape, not from grape/lib/grape' }],
            filename: path.join(__dirname, 'example.js'),
            options,
        },
        {
            code: "import { foo } from 'lemon';",
            errors: [{ message: 'Please import from e.g. lemon/lib/foo, not from lemon directly' }],
            filename: path.join(__dirname, 'lime/example.js'),
            options,
        },
        {
            code: "import foo from 'lemon/lib/foo';",
            errors: [{ message: 'Please import from lime/, not from lemon/' }],
            filename: path.join(__dirname, 'example.js'),
            options,
        },
    ],
});
