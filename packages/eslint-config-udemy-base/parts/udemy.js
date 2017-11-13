module.exports = {
    plugins: [
        'eslint-plugin-udemy',
    ],
    rules: {
        // require use of _.noop, or () => {} instead of Function.prototype
        'udemy/no-function-prototype': ['error', 'always'],
    },
};
