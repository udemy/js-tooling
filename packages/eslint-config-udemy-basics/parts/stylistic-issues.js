'use strict';

module.exports = {
    plugins: ['eslint-plugin-import-order-alphabetical'],
    rules: {
        // enforce spacing inside array brackets
        'array-bracket-spacing': ['error', 'never'],
        // enforce spacing inside single-line blocks
        'block-spacing': ['error', 'always'],
        // enforce one true brace style
        'brace-style': ['error', '1tbs', { allowSingleLine: true }],
        // require camel case names
        camelcase: ['error', { properties: 'never' }],
        // allow trailing commas in multiline object literals
        'comma-dangle': ['error', 'always-multiline'],
        // enforce spacing after comma
        'comma-spacing': 'error',
        // enforce one true comma style
        'comma-style': ['error', 'last'],
        // disallow padding inside computed properties
        'computed-property-spacing': ['error', 'never'],
        // enforce braces for all control statements
        curly: ['error', 'all'],
        // enforce at least one newline at the end of files
        'eol-last': ['error', 'always'],
        // disallow space between function identifier and application
        'func-call-spacing': 'error',
        // enforce a convention in the order of require() and import statements with alphabetical sorting
        'import-order-alphabetical/order': ['error', { 'newlines-between': 'always', groups: [['builtin', 'external'], 'internal', ['parent', 'sibling', 'index']] }],
        // this option sets a specific tab width for your code
        indent: ['error', 4, { SwitchCase: 1, VariableDeclarator: 1 }],
        // require a space before & after certain keywords
        'keyword-spacing': ['error', { before: true, after: true }],
        // enforces spacing between keys and values in object literal properties
        'key-spacing': ['error', { beforeColon: false, afterColon: true }],
        // enforce consistent linebreak style
        'linebreak-style': ['error', 'unix'],
        // specify the maximum length of a line in your program
        // a pattern for a dirty check lines for URLs - strings with slashes and w/o spaces - `ignoreUrls` option too strict
        'max-len': ['error', { code: 150, ignorePattern: '\'\\S*/\\S*\'|"\\S*/\\S*"|`\\S*/\\S*`', ignoreRegExpLiterals: true }],
        // specify the maximum number of statement allowed in a function
        'max-statements': ['error', 40],
        // require a capital letter for constructors
        'new-cap': ['error', { newIsCap: true, capIsNew: true, properties: false }],
        // require parentheses when invoking a constructor with no arguments
        'new-parens': 'error',
        // disallow use of the Array constructor
        'no-array-constructor': 'error',
        // disallow if as the only statement in an else block
        'no-lonely-if': 'error',
        // disallow mixed spaces and tabs for indentation
        'no-mixed-spaces-and-tabs': 'error',
        // disallow multiple empty lines and only one newline at the end
        'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1 }],
        // disallow use of the Object constructor
        'no-new-object': 'error',
        // disallow tabs
        'no-tabs': 'error',
        // disallow trailing whitespace at the end of lines
        'no-trailing-spaces': 'error',
        // disallow the use of boolean literals in conditional expressions and prefer `a || b` over `a ? a : b`
        'no-unneeded-ternary': ['error', { defaultAssignment: false }],
        // disallow whitespace before properties
        'no-whitespace-before-property': 'error',
        // enforce the location of single-line statements
        'nonblock-statement-body-position': ['error', 'beside'],
        // enforce spaces inside braces
        'object-curly-spacing': ['error', 'always'],
        // require newlines around variable declarations with initializations
        'one-var-declaration-per-line': ['error', 'initializations'],
        // enforce padding within blocks
        'padded-blocks': ['error', 'never'],
        // specify whether double or single quotes should be used
        quotes: ['error', 'single', 'avoid-escape'],
        // require or disallow use of quotes around object literal property names
        'quote-props': ['error', 'as-needed', { keywords: true }],
        // require or disallow use of semicolons instead of ASI
        semi: ['error', 'always'],
        // enforce spacing before and after semicolons
        'semi-spacing': 'error',
        // require or disallow a space immediately following the // or /* in a comment
        'spaced-comment': ['error', 'always', { line: { exceptions: ['/'] }, block: { exceptions: ['*'] } }],
        // require or disallow space before blocks
        'space-before-blocks': 'error',
        // require or disallow space before function opening parenthesis
        'space-before-function-paren': ['error', { anonymous: 'always', named: 'never' }],
        // require or disallow spaces inside parentheses
        'space-in-parens': 'error',
        // require spaces around operators
        'space-infix-ops': 'error',
        // Require or disallow spaces before/after unary operators
        'space-unary-ops': 'error',
        // require or disallow the Unicode Byte Order Mark
        'unicode-bom': ['error', 'never'],
    },
};
