'use strict';

module.exports = {
    rules: {
        // enforces return statements in callbacks of array's methods
        'array-callback-return': 'error',
        // forbid `var` in blocks
        'block-scoped-var': 'error',
        // specify curly brace conventions for all control statements
        curly: ['error', 'multi-line'],
        // encourages use of dot notation whenever possible
        'dot-notation': 'error',
        // enforce newline before and after dot
        'dot-location': ['error', 'property'],
        // require the use of === and !==
        eqeqeq: 'error',
        // disallow use of arguments.caller or arguments.callee
        'no-caller': 'error',
        // disallow lexical declarations in case/default clauses
        'no-case-declarations': 'error',
        // disallow empty functions, except for standalone funcs/arrows
        'no-empty-function': ['error', { allow: ['arrowFunctions', 'functions', 'methods'] }],
        // disallow empty destructuring patterns
        'no-empty-pattern': 'error',
        // disallow comparisons to null without a type-checking operator
        'no-eq-null': 'error',
        // disallow use of eval()
        'no-eval': 'error',
        // disallow adding to native types
        'no-extend-native': 'error',
        // disallow unnecessary function binding
        'no-extra-bind': 'error',
        // disallow unnecessary labels
        'no-extra-label': 'error',
        // disallow fallthrough of case statements
        'no-fallthrough': 'error',
        // disallow the use of leading or trailing decimal points in numeric literals
        'no-floating-decimal': 'error',
        // disallow reassignments of native objects
        'no-global-assign': 'error',
        // disallow use of eval()-like methods
        'no-implied-eval': 'error',
        // disallow usage of __iterator__ property
        'no-iterator': 'error',
        // disallow use of labels for anything other then loops and switches
        'no-labels': ['error', { allowLoop: false, allowSwitch: false }],
        // disallow unnecessary nested blocks
        'no-lone-blocks': 'error',
        // disallow function declarations and expressions inside loop statements
        'no-loop-func': 'error',
        // disallow use of multiple spaces
        'no-multi-spaces': 'error',
        // disallow use of multiline strings
        'no-multi-str': 'error',
        // disallow use of new operator when not part of the assignment or comparison
        'no-new': 'error',
        // disallow use of new operator for Function object
        'no-new-func': 'error',
        // disallows creating new instances of String, Number, and Boolean
        'no-new-wrappers': 'error',
        // disallow use of (old style) octal literals
        'no-octal': 'error',
        // disallow use of octal escape sequences in string literals, such as var foo = 'Copyright \251';
        'no-octal-escape': 'error',
        // disallow reassigning function parameters
        'no-param-reassign': 'error',
        // disallow usage of __proto__ property
        'no-proto': 'error',
        // disallow unnecessary calls to `.call()` and `.apply()`
        'no-useless-call': 'error',
        // disallow redundant return statements
        'no-useless-return': 'error',
        // disallow declaring the same variable more then once
        'no-redeclare': 'error',
        // disallow use of assignment in return statement
        'no-return-assign': 'error',
        // disallow unnecessary `return await`
        'no-return-await': 'error',
        // disallow use of `javascript:` urls.
        'no-script-url': 'error',
        // disallow self assignment
        'no-self-assign': 'error',
        // disallow comparisons where both sides are exactly the same
        'no-self-compare': 'error',
        // disallow use of comma operator
        'no-sequences': 'error',
        // restrict what can be thrown as an exception
        'no-throw-literal': 'error',
        // disallow usage of expressions in statement position
        'no-unused-expressions': ['error', { allowShortCircuit: true, allowTernary: true }],
        // disallow unused labels
        'no-unused-labels': 'error',
        // disallow useless string concatenation
        'no-useless-concat': 'error',
        // disallow unnecessary string escaping
        'no-useless-escape': 'error',
        // disallow void operators
        'no-void': 'error',
        // disallow use of the with statement
        'no-with': 'error',
        // require use of the second argument for parseInt()
        radix: 'error',
    },
};
