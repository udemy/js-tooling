'use strict';

const RuleTester = require('eslint').RuleTester;

const rule = require('./index').rules['no-gettext-template'];

RuleTester.setDefaultConfig({
    parser: 'babel-eslint',
});

const ruleTester = new RuleTester();

ruleTester.run('no-gettext-template', rule, {
    valid: [
        {
            code: `gettext('some text ' +
                           'some more text')`,
            options: [],
        },
        {
            code: "gettext('simple line')",
            options: [],
        },
    ],

    invalid: [
        {
            code: 'gettext(`backticks for whatever reason.`)',
            errors: [
                {
                    message: 'No template strings inside gettext.',
                },
            ],
        },
    ],
});
