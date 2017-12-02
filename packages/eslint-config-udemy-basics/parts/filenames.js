'use strict';

module.exports = {
    plugins: [
        'filenames',
    ],
    rules: {
        'filenames/match-regex': ['error', '^(?:\\.eslintrc|Gruntfile|[a-z0-9\\-]+)$'],
    },
};
