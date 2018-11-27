'use strict';

const RuleTester = require('eslint').RuleTester;

const rule = require('./index').rules['no-settimeout'];

const ruleTester = new RuleTester();

ruleTester.run('no-settimeout', rule, {
    valid: [
        {
            code: 'delay()',
            options: [],
        },
    ],
    invalid: [
        {
            code: 'setTimeout()',
            errors: [{
                message: 'Found `setTimeout` called. Please use `await delay()` instead.',
            }],
        },
        {
            code: 'window.setTimeout()',
            errors: [{
                message: 'Found `setTimeout` called. Please use `await delay()` instead.',
            }],
        },
    ],
});
