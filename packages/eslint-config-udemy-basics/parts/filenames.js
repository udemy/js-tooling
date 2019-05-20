'use strict';

module.exports = {
    plugins: ['filenames'],
    rules: {
        'filenames/match-regex': [
            'error',
            '^(?:\\.eslintrc|Gruntfile|prettier.config|[a-z0-9\\-]+(?:\\.spec)?)$',
        ],
    },
};
