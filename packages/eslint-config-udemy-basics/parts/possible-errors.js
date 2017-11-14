module.exports = {
    rules: {
        // disallow window alert / confirm / prompt calls
        'no-alert': 'error',
        // disallow comparing against -0
        'no-compare-neg-zero': 'error',
        // disallow assignment in conditional expressions
        'no-cond-assign': ['error', 'except-parens'],
        // disallow use of console
        'no-console': 'error',
        // disallow constant expressions in conditions
        'no-constant-condition': ['error', { checkLoops: false }],
        // disallow control characters in regular expressions
        'no-control-regex': 'error',
        // disallow use of debugger
        'no-debugger': 'error',
        // disallow duplicate arguments in functions
        'no-dupe-args': 'error',
        // disallow duplicate keys when creating object literals
        'no-dupe-keys': 'error',
        // disallow a duplicate case label.
        'no-duplicate-case': 'error',
        // disallow else after a return in an if
        'no-else-return': 'error',
        // disallow empty statements
        'no-empty': 'error',
        // disallow the use of empty character classes in regular expressions
        'no-empty-character-class': 'error',
        // disallow unnecessary boolean casts
        'no-extra-boolean-cast': 'error',
        // disallow unnecessary semicolons
        'no-extra-semi': 'error',
        // disallow assigning to the exception in a catch block
        'no-ex-assign': 'error',
        // disallow overwriting functions written as function declarations
        'no-func-assign': 'error',
        // disallow function or variable declarations in nested blocks
        'no-inner-declarations': 'error',
        // disallow invalid regular expression strings in the RegExp constructor
        'no-invalid-regexp': 'error',
        // disallow irregular whitespace outside of strings and comments
        'no-irregular-whitespace': 'error',
        // disallow the use of object properties of the global object (Math and JSON) as functions
        'no-obj-calls': 'error',
        // disallow use of Object.prototypes builtins directly
        'no-prototype-builtins': 'error',
        // disallow multiple spaces in a regular expression literal
        'no-regex-spaces': 'error',
        // disallow sparse arrays
        'no-sparse-arrays': 'error',
        // disallow template literal placeholder syntax in regular strings
        'no-template-curly-in-string': 'error',
        // avoid code that looks like two expressions but is actually one
        'no-unexpected-multiline': 'error',
        // disallow return / throw / break / continue inside finally blocks
        'no-unsafe-finally': 'error',
        // disallow negation of the left operand of an in expression
        'no-unsafe-negation': 'error',
        // disallow comparisons with the value NaN
        'use-isnan': 'error',
        // disallow unreachable statements after a return, throw, continue, or break statement
        'no-unreachable': 'error',
        // ensure that the results of typeof are compared against a valid string
        'valid-typeof': 'error',
    },
};
