'use strict';

const path = require('path');

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
        'underscore',
    ],
    settings: {
        'import/resolver': {
            webpack: {
                // Out of eslint-config-udemy-website, out of node_modules.
                config: path.join(__dirname, '../../webpack/config-local.js'),
            },
        },
    },
    rules: {
        'filenames/match-regex': ['error', '^(?:[a-z0-9\\-]+(?:\\.(?:ng-(?:constant|controller|directive|factory|filter|provider|service)|videojs-component|react-(?:component|proptypes)|mobx-(?:model|store)))?(?:\\.spec)?)$'],
        'udemy/angular-path-based-module-names': ['error', 'always'],
        'udemy/decorator-order': ['error', 'always'],
        'udemy/import-blacklist': ['error', [
            {
                // For correct configuration
                source: '^currencyformatter(?:\\.js)?$',
                message: 'Please import from utils/currency-formatter/, not from currencyformatter',
                exceptions: ['utils/currency-formatter(?:\\.spec)?\\.js$'],
            },
            {
                // For code consistency
                source: '^enzyme/build/index(?:\\.js)?$',
                message: 'Please import from enzyme, not from enzyme/build/index',
            },
            {
                // Prefer lodash-es
                source: '^lodash/(.*)$',
                message: 'Please import from lodash-es/$1 instead of lodash/$1',
            },
            {
                // For improved JS bundling
                source: '^(lodash(?:-es)?)(?:\\.js)?$',
                message: 'Please import from e.g. lodash-es/foo, not from $1 directly',
            },
            {
                // Suggest using native Javascript instead of depending on lodash
                source: '^lodash-es/(each|reduce|filter|includes|map|every|some|keys|values|isArray|isString|findIndex|extend|max|first|head|tail|last)(?:\\.js)?$',
                message: 'Please use the native Javascript alternative of lodash-es/$1 function.',
            },
            {
                // For code consistency
                source: '^mobx/lib/mobx(?:\\.js)?$',
                message: 'Please import from mobx, not from mobx/lib/mobx',
            },
            {
                // For correct configuration
                source: '^moment(?:\\.js)?$',
                message: 'Please import from utils/ud-moment, not from moment',
                exceptions: ['utils/ud-moment(?:\\.spec)?\\.js$'],
            },
            {
                // For correct configuration
                source: '^numeral(?:\\.js)?$',
                message: 'Please import from utils/ud-numeral, not from numeral',
                exceptions: ['utils/ud-numeral(?:\\.spec)?\\.js$'],
            },
            {
                // For improved JS bundling
                source: '^react-bootstrap(?:\\.js)?$',
                message: 'Please import from e.g. react-bootstrap/lib/foo, not from react-bootstrap directly',
            },
            {
                // For correct implementation
                source: '^react-bootstrap.*?$',
                message: 'Please import from base-components/, not from react-bootstrap/',
                exceptions: ['/base-components/'],
            },
            {
                // For improved JS bundling
                source: '^react-overlays(?:\\.js)?$',
                message: 'Please import from e.g. react-overlays/lib/foo, not from react-overlays directly',
            },
            {
                // For correct configuration
                source: '^react-router-dom(?:\\.js)?$',
                specifier: '^(BrowserRouter|HashRouter|Router)$',
                message: 'Please `import MemoizedBrowserRouter from \'base-components/memoized-browser-router.react-component\';`, ' +
                'not `import { BrowserRouter, HashRouter, Router } from \'react-router-dom\';`.',
                exceptions: ['base-components/memoized-browser-router.react-component(?:\\.spec)?\\.js$'],
            },
            {
                // For correct implementation
                source: '^react-router-dom(?:\\.js)?$',
                specifier: '^Link$',
                message: 'Please `import Link from \'base-components/link.react-component\';`, ' +
                'not `import { Link } from \'react-router-dom\';`.',
                exceptions: ['base-components/link.react-component(?:\\.spec)?\\.js$'],
            },
        ]],
        'udemy/no-action-bound': ['error', 'always'],
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
        npgettext: false,
        pgettext: false,
        interpolate: false,
        ninterpolate: false,
    },
};
