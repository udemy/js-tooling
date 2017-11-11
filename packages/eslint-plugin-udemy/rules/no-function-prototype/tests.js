const rule = require('./index').rules['no-function-prototype'];
const RuleTester = require('eslint').RuleTester;
RuleTester.setDefaultConfig({
    parserOptions: {
        ecmaVersion: 6,
    }
});
const ruleTester = new RuleTester();

ruleTester.run('no-function-prototype', rule, {
    valid: [
        {
            code: 'x = function() { return 2}',
            options: [],
        },
        {
            code: 'x = function(x) {return x}',
            options: [],
        },
        {
            code: 'x = a => a.b',
            options: [],
        },
        {
            code: 'class A { m() {}}',
            options: [],
        },
        {
            code: 'var x = function * () {}',
            options: [],
        },
    ],

    invalid: [
        {
            code: 'x = Function.prototype',
            errors: [{
                message: 'Avoid using `Function.prototype`; instead use `_.noop` from Underscore.js, ' +
                'or `_.noop` from Lodash, or () => {} otherwise.',
            }],
        },
    ]
});
