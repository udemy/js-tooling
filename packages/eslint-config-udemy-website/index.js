'use strict';

const path = require('path');

module.exports = {
    extends: ['udemy-basics', 'udemy-babel-addons', 'udemy-react-addons', 'udemy-jasmine-addons'],
    plugins: ['udemy', 'filenames', 'lodash'],
    settings: {
        'import/resolver': {
            webpack: {
                // Out of eslint-config-udemy-website, out of node_modules.
                config: path.join(__dirname, '../../webpack/config-local.js'),
            },
        },
    },
    rules: {
        'filenames/match-regex': [
            'error',
            [
                [
                    '^(?:_?[a-z0-9\\-]+', // allows underscore start and any lowercase filename
                    '(?:\\.(?:', // any dot must be:
                    'ng-(?:constant|controller|directive|factory|filter|provider|service)', // an Angular file
                    '|videojs-component', // or a videojs-component
                    '|react-(?:isocomponent|component|proptypes)', // or a React file
                    '|mobx-(?:model|store)', // or a Mobx file
                    '))?',
                    '(?:\\.spec)?)$', // allows group to be a spec file
                ].join(''),
                '|^\\.eslintrc$', // files named .eslintrc.js
                '|^[a-z0-9\\-]+\\.(?:config|stories)$', // files named *.config.js or *.stories.js
            ].join(''),
        ],
        'udemy/angular-path-based-module-names': ['error', 'always'],
        'udemy/decorator-order': ['error', 'always'],
        'udemy/import-blacklist': [
            'error',
            [
                {
                    // For correct configuration
                    source: '^currencyformatter(?:\\.js)?$',
                    message:
                        'Please import from utils/currency-formatter/, not from currencyformatter',
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
                    source:
                        '^lodash-es/(each|reduce|filter|includes|map|every|some|keys|values|isArray|isString|findIndex|extend|max|first|head|tail|last)(?:\\.js)?$',
                    message:
                        'Please use the native Javascript alternative of lodash-es/$1 function.',
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
                    message:
                        'Please import from e.g. react-bootstrap/lib/foo, not from react-bootstrap directly',
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
                    message:
                        'Please import from e.g. react-overlays/lib/foo, not from react-overlays directly',
                },
                {
                    // For correct configuration
                    source: '^react-router-dom(?:\\.js)?$',
                    specifier: '^(BrowserRouter|HashRouter|Router)$',
                    message:
                        "Please `import MemoizedBrowserRouter from 'base-components/memoized-browser-router.react-component';`, " +
                        "not `import { BrowserRouter, HashRouter, Router } from 'react-router-dom';`.",
                    exceptions: [
                        'base-components/udlite/router/memoized-browser-router.react-component(?:\\.spec)?\\.js$',
                    ],
                },
                {
                    // For correct implementation
                    source: '^react-router-dom(?:\\.js)?$',
                    specifier: '^Link$',
                    message:
                        "Please `import Link from 'base-components/link.react-component';`, " +
                        "not `import { Link } from 'react-router-dom';`.",
                    exceptions: [
                        'base-components/udlite/router/link.react-component(?:\\.spec)?\\.js$',
                    ],
                },
                {
                    // Tapen only lib
                    source: '^react-table(?:\\.js)?$',
                    message: 'react-table is only allowed in tapen',
                    exceptions: ['tapen/.*?\\.js$'],
                },
                {
                    // Tapen only lib
                    source: '^react-treebeard(?:\\.js)?$',
                    message: 'react-treebeard is only allowed in tapen',
                    exceptions: ['tapen/.*?\\.js$'],
                },
                {
                    // Tapen only lib
                    source: '^vis-react(?:\\.js)?$',
                    message: 'vis-react is only allowed in tapen',
                    exceptions: ['tapen/.*?\\.js$'],
                },
            ],
        ],
        'udemy/udlite-import-blacklist': [
            'error',
            [
                {
                    source: 'base-components/(?!udlite/)',
                    message:
                        'UDLite files may not import UDHeavy base-components. ' +
                        'Replace the following with a base-components/udlite/ component:',
                },
                {
                    source: '(react-bootstrap|react-overlays|react-router-bootstrap)',
                    message:
                        'UDLite files may not import React-Bootstrap libs. ' +
                        'Replace the following with a base-components/udlite/ component:',
                },
                {
                    source: '(react-popper|popper.js)',
                    message:
                        'UDLite files may not import Popper. ' +
                        'Replace the following with a base-components/udlite/ component:',
                },
                {
                    source: '(react-slick|slick-carousel)',
                    message:
                        'UDLite files may not import Slick carousel. ' +
                        'Replace the following with ' +
                        'base-components/udlite/carousel/carousel.react-component:',
                },
                {
                    source: 'react-waypoint',
                    message:
                        'UDLite files may not import React Waypoint. ' +
                        'Replace the following with ' +
                        '@researchgate/react-intersection-observer:',
                },
                {
                    source: 'velocity',
                    message:
                        'UDLite files may not import Velociy. ' +
                        'Only CSS animations are allowed:',
                },
                {
                    source: 'utils/ud-utils$',
                    message:
                        'UDLite files may not import utils/ud-utils. ' +
                        'Replace udUtils.Feedback with ui-feedback/udlite. ' +
                        'The rest is split up into smaller utils/ files:',
                },
                {
                    source: '(lodash|lodash-es)/(?!noop)',
                    message:
                        'UDLite files may not use Lodash. ' +
                        'Replace the following with ES6 or one of our own utils/ functions:',
                },
                {
                    source: '(jquery|jQuery)',
                    message: 'UDLite files may not use jQuery:',
                },
                {
                    source: 'jsuri',
                    message: 'UDLite files may not use jsuri. Replace with URLSearchParams:',
                },
                {
                    source: '(^moment$|ud-moment)',
                    message:
                        'UDLite files may not use moment. ' +
                        'Ask #dev-team-web-frontend about your use-case:',
                },
                {
                    source: '(^numeral$|ud-numeral)',
                    message: 'UDLite files may not use numeral. Replace with udlite-numeral:',
                },
            ],
        ],
        'udemy/no-action-bound': ['error', 'always'],
        'udemy/no-gettext-template': 'error',
        'udemy/no-hardcoded-cdns': [
            'error',
            [
                {
                    cdn: 'udemy-images.udemy.com',
                    fixWith: 'udLink.toS3Images()',
                },
                {
                    cdn: 's3.amazonaws.com/udemy-images',
                    fixWith: 'udLink.toS3Images()',
                },
            ],
        ],
        'lodash/prefer-noop': ['error', 'always'],
    },
    overrides: [
        {
            files: '**/*.spec.js',
            rules: {
                'udemy/no-settimeout': ['error', 'always'],
                'udemy/no-then': ['error', 'always'],
            },
        },
    ],
    env: {
        jquery: true,
    },
    globals: {
        UD: true,
        module: false,
        gettext: false,
        ngettext: false,
        npgettext: false,
        pgettext: false,
        interpolate: false,
        ninterpolate: false,
    },
};
