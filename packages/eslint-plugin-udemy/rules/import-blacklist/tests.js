'use strict';

const RuleTester = require('eslint').RuleTester;
const path = require('path');

const rule = require('./index').rules['import-blacklist'];

const ruleTester = new RuleTester({
    parserOptions: {
        ecmaVersion: 2015,
        sourceType: 'module',
    },
});

const options = [[
    {
        source: '^apple(?:\\.js)?$',
        message: 'Please import from fruit/apple, not from apple',
        exceptions: ['fruit/apple(?:\\.spec)?\\.js$'],
    },
    {
        source: '^(peach|pecan)(?:\\.js)?$',
        message: 'Please import from fruit/$1, not from $1',
        exceptions: ['fruit/(?:peach|pecan)(?:\\.spec)?\\.js$'],
    },
    {
        source: '^grape/lib/grape(?:\\.js)?$',
        message: 'Please import from grape, not from grape/lib/grape',
    },
    {
        source: '^lemon(?:\\.js)?$',
        message: 'Please import from e.g. lemon/lib/foo, not from lemon directly',
    },
    {
        source: '^lemon.*?$',
        message: 'Please import from lime/, not from lemon/',
        exceptions: ['/lime/'],
    },
    {
        source: '^pear(?:\\.js)?$',
        specifier: '^Comice$',
        message: 'Please import OurComice from our/comice, not import { Comice } from pear',
    },
    {
        source: '^(berry)(?:\\.js)?$',
        specifier: '^(BlueBerry|BlackBerry)$',
        message: 'Please import { $2 } from our/$1, not import { $2 } from $1',
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
            code: "import peach from 'peach.js';",
            filename: path.join(__dirname, 'fruit/peach.js'),
            options,
        },
        {
            code: "import pecan from 'pecan.js';",
            filename: path.join(__dirname, 'fruit/pecan.js'),
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
        {
            code: "import { Bosc } from 'pear';",
            filename: path.join(__dirname, 'example.js'),
            options,
        },
        {
            code: "import { StrawBerry } from 'berry';",
            filename: path.join(__dirname, 'example.js'),
            options,
        },
    ],
    invalid: [
        {
            code: "import apple from 'apple.js';",
            errors: [{ message: 'Please import from fruit/apple, not from apple' }],
            filename: path.join(__dirname, 'example.js'),
            options,
        },
        {
            code: "import peach from 'peach.js';",
            errors: [{ message: 'Please import from fruit/peach, not from peach' }],
            filename: path.join(__dirname, 'example.js'),
            options,
        },
        {
            code: "import pecan from 'pecan.js';",
            errors: [{ message: 'Please import from fruit/pecan, not from pecan' }],
            filename: path.join(__dirname, 'example.js'),
            options,
        },
        {
            code: "import apple from 'apple';",
            errors: [{ message: 'Please import from fruit/apple, not from apple' }],
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
        {
            code: "import { Comice } from 'pear';",
            errors: [{ message: 'Please import OurComice from our/comice, not import { Comice } from pear' }],
            filename: path.join(__dirname, 'example.js'),
            options,
        },
        {
            code: "import { BlueBerry } from 'berry';",
            errors: [{ message: 'Please import { BlueBerry } from our/berry, not import { BlueBerry } from berry' }],
            filename: path.join(__dirname, 'example.js'),
            options,
        },
        {
            code: "import { BlackBerry } from 'berry';",
            errors: [{ message: 'Please import { BlackBerry } from our/berry, not import { BlackBerry } from berry' }],
            filename: path.join(__dirname, 'example.js'),
            options,
        },
    ],
});
