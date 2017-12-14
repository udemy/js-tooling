'use strict';

module.exports = {
    'extends': [
        'udemy-basics',
        'udemy-babel-addons',
        'udemy-react-addons',
        'udemy-jasmine-addons',
    ],
    plugins: [
        'udemy',
        'filenames',
        'lodash',
        'underscore',
    ],
    settings: {
        'import/resolver': {
            webpack: {
                config: 'webpack/config-local.js',
            },
        },
    },
    rules: {
        'filenames/match-regex': ['error', '^(?:[a-z0-9\\-]+(?:\\.(?:jqui-widget|ng-(?:constant|controller|directive|factory|filter|provider|service)|react-(?:component|proptypes)|mobx-(?:model|store)))?(?:\\.spec)?)$'],
        'lodash/import-scope': ['error', 'method'],
        'udemy/angular-path-based-module-names': ['error', 'always'],
        'underscore/prefer-noop': ['error', 'always'],
    },
    overrides: [
        {
            files: '**/*.spec.js',
            rules: {
                'udemy/no-non-zero-settimeout': ['error', 'always'],
            },
        },
    ],
    env: {
        jquery: true,
    },
    globals: {
        UD: true,
        module: false,
        inject: false,
        angular: false,
        gettext: false,
        ngettext: false,
        pgettext: false,
        interpolate: false,
        ninterpolate: false,
    },
};
