'use strict';

const rule = require('./index').rules['no-action-bound'];
const RuleTester = require('eslint').RuleTester;

RuleTester.setDefaultConfig({
    parser: 'babel-eslint',
});

const ruleTester = new RuleTester();

ruleTester.run('no-action-bound', rule, {
    valid: [
        {
            code: `class myClass {
                       @action mymethod() { return true; }
                   }`,
            options: [],
        },
        {
            code: `class myClass {
                       @autobind @action mymethod() { return true; }
                   }`,
            options: [],
        },
    ],

    invalid: [
        {
            code: `class myClass {
                       @action.bound mymethod() { return true; }
                   }`,
            errors: [{
                message: 'Avoid using `@action.bound`; instead use `@autobind @action`.',
            }],
        },
        {
            code: `class myClass {
                       @observer @action.bound mymethod() { return true; }
                   }`,
            errors: [{
                message: 'Avoid using `@action.bound`; instead use `@autobind @action`.',
            }],
        },
    ],
});
