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
        // For correct configuration
        pattern: '^currencyformatter(?:\\.js)?$',
        message: 'Please import from utils/currency-formatter/, not from currencyformatter',
        exceptions: ['utils/currency-formatter(?:\\.spec)?\\.js$'],
    },
    {
        // For improved JS bundling
        pattern: '^lodash(?:\\.js)?$',
        message: 'Please import from e.g. lodash/foo, not from lodash directly',
    },
    {
        // For code consistency
        pattern: '^mobx/lib/mobx(?:\\.js)?$',
        message: 'Please import from mobx, not from mobx/lib/mobx',
    },
    {
        // For correct configuration
        pattern: '^moment(?:\\.js)?$',
        message: 'Please import from utils/ud-moment, not from moment',
        exceptions: ['utils/ud-moment(?:\\.spec)?\\.js$'],
    },
    {
        // For correct configuration
        pattern: '^numeral(?:\\.js)?$',
        message: 'Please import from utils/ud-numeral, not from numeral',
        exceptions: ['utils/ud-numeral(?:\\.spec)?\\.js$'],
    },
    {
        // For improved JS bundling
        pattern: '^react-bootstrap(?:\\.js)?$',
        message: 'Please import from e.g. react-bootstrap/lib/foo, not from react-bootstrap directly',
    },
    {
        // For correct implementation
        pattern: '^react-bootstrap.*?$',
        message: 'Please import from base-components/, not from react-bootstrap/',
        exceptions: ['/base-components/'],
    },
    {
        // For improved JS bundling
        pattern: '^react-overlays(?:\\.js)?$',
        message: 'Please import from e.g. react-overlays/lib/foo, not from react-overlays directly',
    },
]];

ruleTester.run('import-blacklist', rule, {
    valid: [
        {
            code: "import currencyFormatter from 'currencyformatter.js';",
            filename: path.join(__dirname, 'utils/currency-formatter.js'),
            options,
        },
        {
            code: "import example from 'lodash/example';",
            filename: path.join(__dirname, 'example.js'),
            options,
        },
        {
            code: "import mobx from 'mobx';",
            filename: path.join(__dirname, 'example.mobx-store.js'),
            options,
        },
        {
            code: "import moment from 'moment';",
            filename: path.join(__dirname, 'utils/ud-moment.js'),
            options,
        },
        {
            code: "import numeral from 'numeral';",
            filename: path.join(__dirname, 'utils/ud-numeral.js'),
            options,
        },
        {
            code: "import Example from 'react-bootstrap/lib/Example';",
            filename: path.join(__dirname, 'base-components/example.react-component.js'),
            options,
        },
        {
            code: "import { Example } from 'react-overlays/lib/Example';",
            filename: path.join(__dirname, 'example.react-component.js'),
            options,
        },
    ],
    invalid: [
        {
            code: "import currencyFormatter from 'currencyformatter.js';",
            errors: [{ message: 'Please import from utils/currency-formatter/, not from currencyformatter' }],
            filename: path.join(__dirname, 'example.js'),
            options,
        },
        {
            code: "import { example } from 'lodash';",
            errors: [{ message: 'Please import from e.g. lodash/foo, not from lodash directly' }],
            filename: path.join(__dirname, 'example.js'),
            options,
        },
        {
            code: "import mobx from 'mobx/lib/mobx';",
            errors: [{ message: 'Please import from mobx, not from mobx/lib/mobx' }],
            filename: path.join(__dirname, 'example.mobx-store.js'),
            options,
        },
        {
            code: "import moment from 'moment';",
            errors: [{ message: 'Please import from utils/ud-moment, not from moment' }],
            filename: path.join(__dirname, 'example.js'),
            options,
        },
        {
            code: "import numeral from 'numeral';",
            errors: [{ message: 'Please import from utils/ud-numeral, not from numeral' }],
            filename: path.join(__dirname, 'example.js'),
            options,
        },
        {
            code: "import { Example } from 'react-bootstrap';",
            errors: [{ message: 'Please import from e.g. react-bootstrap/lib/foo, not from react-bootstrap directly' }],
            filename: path.join(__dirname, 'base-components/example.react-component.js'),
            options,
        },
        {
            code: "import Example from 'react-bootstrap/lib/Example';",
            errors: [{ message: 'Please import from base-components/, not from react-bootstrap/' }],
            filename: path.join(__dirname, 'example.react-component.js'),
            options,
        },
        {
            code: "import { Example } from 'react-overlays';",
            errors: [{ message: 'Please import from e.g. react-overlays/lib/foo, not from react-overlays directly' }],
            filename: path.join(__dirname, 'example.react-component.js'),
            options,
        },
    ],
});
