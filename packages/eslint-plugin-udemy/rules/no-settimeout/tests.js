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
                message: 'Found `setTimeout` used in a spec. Please use `await delay` instead.',
            }],
        },
        {
            code: 'setTimeout( function () {})',
            errors: [{
                message: 'Found `setTimeout` used in a spec. Please use `await delay` instead.',
            }],
        },
        {
            code: 'setTimeout(function (val) { return val * 2 })',
            errors: [{
                message: 'Found `setTimeout` used in a spec. Please use `await delay` instead.',
            }],
        },
        {
            code: 'setTimeout(0)',
            errors: [{
                message: 'Found `setTimeout` used in a spec. Please use `await delay` instead.',
            }],
        },
        {
            code: 'setTimeout(function (val) {}, 0)',
            errors: [{
                message: 'Found `setTimeout` used in a spec. Please use `await delay` instead.',
            }],
        },
        {
            code: 'setTimeout(function (val) { return val * 2 }, 0)',
            errors: [{
                message: 'Found `setTimeout` used in a spec. Please use `await delay` instead.',
            }],
        },
        {
            code: 'setTimeout(100)',
            errors: [{
                message: 'Found `setTimeout` used in a spec. Please use `await delay` instead.',
            }],
        },
        {
            code: 'setTimeout(-100)',
            errors: [{
                message: 'Found `setTimeout` used in a spec. Please use `await delay` instead.',
            }],
        },
        {
            code: 'setTimeout(function (val) {}, 100)',
            errors: [{
                message: 'Found `setTimeout` used in a spec. Please use `await delay` instead.',
            }],
        },
        {
            code: 'setTimeout(function (val) { return val * 2 }, 100)',
            errors: [{
                message: 'Found `setTimeout` used in a spec. Please use `await delay` instead.',
            }],
        },
    ],
});
