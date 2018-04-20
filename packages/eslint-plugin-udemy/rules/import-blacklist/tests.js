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

ruleTester.run('import-blacklist', rule, {
    valid: [
        {
            code: "import currencyFormatter from 'currencyformatter.js';",
            filename: path.join(__dirname, 'utils/currency-formatter.js'),
        },
        {
            code: "import example from 'lodash/example';",
            filename: path.join(__dirname, 'example.js'),
        },
        {
            code: "import mobx from 'mobx';",
            filename: path.join(__dirname, 'example.mobx-store.js'),
        },
        {
            code: "import moment from 'moment';",
            filename: path.join(__dirname, 'utils/ud-moment.js'),
        },
        {
            code: "import numeral from 'numeral';",
            filename: path.join(__dirname, 'utils/ud-numeral.js'),
        },
        {
            code: "import Example from 'react-bootstrap/lib/Example';",
            filename: path.join(__dirname, 'base-components/example.react-component.js'),
        },
        {
            code: "import { Example } from 'react-overlays/lib/Example';",
            filename: path.join(__dirname, 'example.react-component.js'),
        },
    ],
    invalid: [
        {
            code: "import currencyFormatter from 'currencyformatter.js';",
            errors: [{ message: 'Please import from utils/currency-formatter/, not from currencyformatter' }],
            filename: path.join(__dirname, 'example.js'),
        },
        {
            code: "import { example } from 'lodash';",
            errors: [{ message: 'Please import from lodash/lib/, not from lodash directly' }],
            filename: path.join(__dirname, 'example.js'),
        },
        {
            code: "import mobx from 'mobx/lib/mobx';",
            errors: [{ message: 'Please import from mobx, not from mobx/lib/mobx' }],
            filename: path.join(__dirname, 'example.mobx-store.js'),
        },
        {
            code: "import moment from 'moment';",
            errors: [{ message: 'Please import from utils/ud-moment, not from moment' }],
            filename: path.join(__dirname, 'example.js'),
        },
        {
            code: "import numeral from 'numeral';",
            errors: [{ message: 'Please import from utils/ud-numeral, not from numeral' }],
            filename: path.join(__dirname, 'example.js'),
        },
        {
            code: "import { Example } from 'react-bootstrap';",
            errors: [{ message: 'Please import from react-bootstrap/lib/, not from react-bootstrap directly' }],
            filename: path.join(__dirname, 'base-components/example.react-component.js'),
        },
        {
            code: "import Example from 'react-bootstrap/lib/Example';",
            errors: [{ message: 'Please import from base-components/, not from react-bootstrap/' }],
            filename: path.join(__dirname, 'example.react-component.js'),
        },
        {
            code: "import { Example } from 'react-overlays';",
            errors: [{ message: 'Please import from react-overlays/lib/, not from react-overlays directly' }],
            filename: path.join(__dirname, 'example.react-component.js'),
        },
    ],
});
