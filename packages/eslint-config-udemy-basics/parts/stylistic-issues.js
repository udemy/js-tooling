'use strict';

module.exports = {
    plugins: ['import-order-alphabetical'],
    rules: {
        // require camel case names
        camelcase: ['error', {properties: 'never'}],
        // enforce braces for all control statements
        curly: ['error', 'all'],
        // enforce a convention in the order of require() and import statements with alphabetical sorting
        // 'import-order-alphabetical/order': [
        //     'error',
        //     {
        //         'newlines-between': 'always',
        //         groups: [['builtin', 'external'], 'internal', ['parent', 'sibling', 'index']],
        //     },
        // ],
        // enforce consistent linebreak style
        'linebreak-style': ['error', 'unix'],
        // enforce consistent number of newlines between class members
        'lines-between-class-members': ['error', 'always', {exceptAfterSingleLine: true}],
        // specify the maximum number of statement allowed in a function
        'max-statements': ['error', 40],
        // require a capital letter for constructors
        'new-cap': ['error', {newIsCap: true, capIsNew: true, properties: false}],
        // disallow use of the Array constructor
        'no-array-constructor': 'error',
        // disallow if as the only statement in an else block
        'no-lonely-if': 'error',
        // disallow use of the Object constructor
        'no-new-object': 'error',
        // disallow tabs
        'no-tabs': 'error',
        // disallow the use of boolean literals in conditional expressions and prefer `a || b` over `a ? a : b`
        'no-unneeded-ternary': ['error', {defaultAssignment: false}],
        // specify whether double or single quotes should be used
        quotes: ['error', 'single', 'avoid-escape'],
        // require or disallow a space immediately following the // or /* in a comment
        'spaced-comment': [
            'error',
            'always',
            {line: {exceptions: ['/']}, block: {exceptions: ['*']}},
        ],
    },
};
