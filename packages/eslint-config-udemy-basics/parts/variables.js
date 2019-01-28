'use strict';

module.exports = {
    rules: {
        // disallow catch clause parameters from shadowing variables in the outer scope
        'no-catch-shadow': 'error',
        // disallow deletion of variables
        'no-delete-var': 'error',
        // disallow labels that share a name with a variable
        'no-label-var': 'error',
        // disallow declaration of variables already declared in the outer scope
        'no-shadow': 'error',
        // disallow shadowing of names such as arguments
        'no-shadow-restricted-names': 'error',
        // disallow use of undeclared variables unless mentioned in a /*global */ block
        'no-undef': ['error'],
        // disallow initializing variables to undefined
        'no-undef-init': 'error',
        // disallow declaration of variables that are not used in the code
        'no-unused-vars': ['error', {vars: 'local', args: 'after-used', ignoreRestSiblings: true}],
        // disallow use of variables before they are defined
        'no-use-before-define': ['error', {functions: false, classes: false}],
    },
};
