'use strict';

const RuleTester = require('eslint').RuleTester;

const rule = require('./index').rules['decorator-order'];

RuleTester.setDefaultConfig({
    parser: 'babel-eslint',
});

const ruleTester = new RuleTester();

ruleTester.run('decorator-order', rule, {
    valid: [
        {
            code: `class MyClass {
                       @action mymethod() { return true; }
                   }`,
            options: [],
        },
        {
            code: `class MyClass {
                       @autobind @action mymethod() { return true; }
                   }`,
            options: [],
        },
        {
            code: `@inject @observer class MyClass {
                       @autobind @action mymethod() { return true; }
                   }`,
            options: [],
        },
    ],

    invalid: [
        {
            code: `class MyClass {
                       @action @autobind mymethod() { return true; }
                   }`,
            errors: [
                {
                    message: '`@autobind` should come before `@action`.',
                },
            ],
        },
        {
            code: `@observer @inject class MyClass {
                      @autobind @action mymethod() { return true; }
                   }`,
            errors: [
                {
                    message: '`@observer` should be the inner-most decorator.',
                },
            ],
        },
    ],
});
