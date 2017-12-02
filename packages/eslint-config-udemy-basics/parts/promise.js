'use strict';

module.exports = {
    plugins: ['promise'],
    rules: {
        // enforces the use of catch on un-returned promises
        'promise/catch-or-return': ['error', { allowThen: true, terminationMethod: ['catch', 'finally'] }],
        // avoid wrapping values in `Promise.resolve` or `Promise.reject` when not needed
        'promise/no-return-wrap': 'error',
        // enforce consistent param names when creating new promises
        'promise/param-names': 'error',
    },
};
