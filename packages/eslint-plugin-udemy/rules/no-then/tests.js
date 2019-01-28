'use strict';

const RuleTester = require('eslint').RuleTester;

RuleTester.setDefaultConfig({
    parser: 'babel-eslint',
});

const rule = require('./index').rules['no-then'];

const ruleTester = new RuleTester();

ruleTester.run('no-then', rule, {
    valid: [
        {
            code: 'async () => await promise;',
            options: [],
        },
    ],
    invalid: [
        {
            code: 'promise.then()',
            errors: [
                {
                    message: 'Found `then` usage. You should usually use async / await instead.',
                },
            ],
        },
        {
            code: 'myfunc(arg).then()',
            errors: [
                {
                    message: 'Found `then` usage. You should usually use async / await instead.',
                },
            ],
        },
    ],
});
