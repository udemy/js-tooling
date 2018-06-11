'use strict';

module.exports = {
    presets: [
        [
            'env',
            {
                // See:
                //
                //  * https://babeljs.io/docs/plugins/preset-env/
                //  * https://github.com/browserslist/browserslist#queries
                //  * http://browserl.ist/
                //  * https://support.udemy.com/hc/en-us/articles/229231047-System-Requirements
                //
                // Actually, the defaults look like they match our requirements.
                targets: {
                    browsers: [
                        'defaults',
                    ],
                },
                modules: false,
            },
        ],
    ],

    plugins: [
        // Legacy decorator transform with the old decorator behavior from Babel@5
        ['transform-decorators-legacy'],

        // ES2017 async functions (syntax)
        ['syntax-async-functions'],

        // Dynamic imports in order to use Webpack's ModuleConcatenationPlugin
        ['syntax-dynamic-import'],

        // JSX (syntax)
        // We don't use the react preset because we don't want preset-flow (at least not yet)
        // and don't need transform-react-display-name
        ['syntax-jsx'],

        // JSX (transform)
        // `useBuiltIns` option for usage `Object.assign` directly instead of `extends` helper
        ['transform-react-jsx', { useBuiltIns: true }],

        // Stage-2 public class fields
        ['transform-class-properties'],

        // Adds 'use strict'; to each file - Webpack adds it only for modules with ES6+ import / export
        ['transform-strict-mode'],

        // Stage-3 object rest / spread properties
        // `useBuiltIns` option for usage `Object.assign` directly instead of `extends` helper
        ['transform-object-rest-spread', { useBuiltIns: true }],

        // babel-plugin-react-css-modules
        ['react-css-modules', {
            filetypes: {
                '.less': {
                    syntax: 'postcss-less',
                },
            },
            exclude: '\\.global\\.less$',
            // This pattern also exists in udemy-django/static/webpack/helpers/less-loaders.js.
            generateScopedName: '[name]--[local]--[hash:base64:5]',
        }],

        // Deduplication helpers
        ['external-helpers'],
    ],
};
