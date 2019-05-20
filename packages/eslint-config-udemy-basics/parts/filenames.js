'use strict';

module.exports = {
    plugins: ['filenames'],
    rules: {
        'filenames/match-regex': [
            'error',
            // Allow config files, dash-cased JS files, and spec files.
            '^(?:\\.eslintrc|Gruntfile|prettier.config|[a-z0-9\\-]+(?:\\.spec)?)$',
        ],
    },
};
