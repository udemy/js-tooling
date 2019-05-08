'use strict';

module.exports = {
    plugins: ['jasmine'],
    rules: {
        // discourage making expectations in setup and teardown functions
        'jasmine/no-expect-in-setup-teardown': 'error',
        // disallow use of focused tests
        'jasmine/no-focused-tests': 'error',
        // disallow the use of duplicate suite names
        'jasmine/no-suite-dupes': ['error', 'branch'],
        // disallow the use of duplicate spec names
        'jasmine/no-spec-dupes': ['error', 'branch'],
        // enforce that a suites's callback does not contain any arguments
        'jasmine/no-suite-callback-args': 'error',
        // enforce valid expect() usage
        'jasmine/valid-expect': 'error',
    },
    env: {
        jasmine: true,
    },
};
