const rule = require('./index').rules['no-non-zero-settimeout'];
const RuleTester = require('eslint').RuleTester;

const ruleTester = new RuleTester();

ruleTester.run('no-nonzero', rule, {
    valid: [
        {
            code: 'setTimeout()',
            options: [],
        },
        {
            code: 'setTimeout( function () {})',
            options: [],
        },
        {
            code: 'setTimeout(function (val) { return val * 2 })',
            options: [],
        },
        {
            code: 'setTimeout(0)',
            options: [],
        },
        {
            code: 'setTimeout(function (val) {}, 0)',
            options: [],
        },
        {
            code: 'setTimeout(function (val) { return val * 2 }, 0)',
            options: [],
        },
    ],
    invalid: [
        {
            code: 'setTimeout(100)',
            errors: [{
                message: 'Found setTimeout used in a spec file with nonzero delay',
            }],
        },
        {
            code: 'setTimeout(-100)',
            errors: [{
                message: 'Found setTimeout used in a spec file with nonzero delay',
            }],
        },
        {
            code: 'setTimeout(function (val) {}, 100)',
            errors: [{
                message: 'Found setTimeout used in a spec file with nonzero delay',
            }],
        },
        {
            code: 'setTimeout(function (val) { return val * 2 }, 100)',
            errors: [{
                message: 'Found setTimeout used in a spec file with nonzero delay',
            }],
        },
    ],
});
