module.exports = {
    env: {
        es6: true,
    },
    rules: {
        // require parens in arrow function arguments
        'arrow-parens': ['error', 'as-needed'],
        // require space before/after arrow function's arrow
        'arrow-spacing': 'error',
        // verify super() callings in constructors
        'constructor-super': 'error',
        // enforce the spacing around the * in generator functions
        'generator-star-spacing': ['error', { before: false, after: true }],
        // disallow modifying variables of class declarations
        'no-class-assign': 'error',
        // disallow modifying variables that are declared using const
        'no-const-assign': 'error',
        // disallow duplicate class members
        'no-dupe-class-members': 'error',
        // disallow symbol constructor
        'no-new-symbol': 'error',
        // disallow useless computed property keys
        'no-useless-computed-key': 'error',
        // disallow unnecessary constructor
        'no-useless-constructor': 'error',
        // disallow renaming import, export, and destructured assignments to the same name
        'no-useless-rename': 'error',
        // require let or const instead of var
        'no-var': 'error',
        // require method and property shorthand syntax for object literals
        'object-shorthand': ['error', 'always'],
        // suggest using arrow functions as callbacks
        'prefer-arrow-callback': 'error',
        // suggest using of const declaration for variables that are never modified after declared
        'prefer-const': ['error', { destructuring: 'all', ignoreReadBeforeAssign: false }],
        // prefer destructuring from objects
        // 'prefer-destructuring': ['error', {array: false, object: true}, {enforceForRenamedProperties: false}],
        // disallow parseInt() in favor of binary, octal, and hexadecimal literals
        'prefer-numeric-literals': 'error',
        // use rest parameters instead of arguments
        'prefer-rest-params': 'error',
        // suggest using the spread operator instead of .apply()
        'prefer-spread': 'error',
        // suggest using template literals instead of string concatenation
        'prefer-template': 'error',
        // enforce spacing between object rest-spread
        'rest-spread-spacing': 'error',
        // require symbol description
        'symbol-description': 'error',
        // enforce usage of spacing in template strings
        'template-curly-spacing': 'error',
        // disallow spacing between template tags and their literals
        'template-tag-spacing': 'error',
        // enforce spacing around the * in yield* expressions
        'yield-star-spacing': ['error', 'after'],
    },
};
