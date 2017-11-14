module.exports = {
    parser: 'babel-eslint',
    plugins: ['babel'],
    rules: {
        // require use of semicolons instead of ASI, includes class properties
        'babel/semi': ['error', 'always'],
    },
};
