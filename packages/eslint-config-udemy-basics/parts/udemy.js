'use strict';

module.exports = {
    plugins: ['udemy'],
    rules: {
        // require use of _.noop, or () => {} instead of Function.prototype
        'udemy/no-function-prototype': ['error', 'always'],
    },
};
