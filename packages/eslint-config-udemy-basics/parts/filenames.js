'use strict';

module.exports = {
    plugins: [
        'filenames',
    ],
    rules: {
        'filenames/match-regex': ['error', '^(?:\\.eslintrc|[a-z0-9\\-]+)$'],
    },
};
