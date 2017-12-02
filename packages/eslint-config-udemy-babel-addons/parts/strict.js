'use strict';

module.exports = {
    parserOptions: {
        sourceType: 'module',
        impliedStrict: true,
    },
    rules: {
        // babel inserts `'use strict';` for us
        strict: ['error', 'never'],
    },
};
