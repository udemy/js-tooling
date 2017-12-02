'use strict';

module.exports = {
    rules: {
        // disallow new operators with calls to require
        'no-new-require': 'error',
        // disallow string concatenation with `__dirname` and `__filename`
        'no-path-concat': 'error',
    },
};
