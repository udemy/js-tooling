'use strict';

module.exports = {
    parser: 'babel-eslint',
    parserOptions: {
        ecmaFeatures: {
            legacyDecorators: true,
        },
    },
    plugins: ['babel'],
    rules: {
        // require use of semicolons, includes class properties
        'babel/semi': ['error', 'always'],
    },
};
