'use strict';

module.exports = {
    parser: 'babel-eslint',
    plugins: [
        'babel',
    ],
    rules: {
        // require use of semicolons, includes class properties
        'babel/semi': ['error', 'always'],
    },
};
