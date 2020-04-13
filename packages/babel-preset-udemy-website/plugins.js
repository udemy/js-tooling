'use strict';

module.exports = [
    // Legacy decorator transform with the old decorator behavior from Babel@5
    // There are some caveats as to how to set this up:
    // https://new.babeljs.io/docs/en/next/babel-plugin-proposal-decorators.html
    ['@babel/plugin-proposal-decorators', {legacy: true}],

    // Dynamic imports in order to use Webpack's ModuleConcatenationPlugin
    ['@babel/plugin-syntax-dynamic-import'],

    // Stage-2 public class fields
    // This interacts with @babel/plugin-proposal-decorators above.
    ['@babel/plugin-proposal-class-properties', {loose: true}],

    // Adds 'use strict'; to each file - Webpack adds it only for modules with ES6+ import / export
    ['@babel/plugin-transform-strict-mode'],

    // Stage-4 optional chaining https://babeljs.io/docs/en/babel-plugin-proposal-optional-chaining
    ['@babel/plugin-proposal-optional-chaining'],

    // babel-plugin-react-css-modules
    [
        'babel-plugin-react-css-modules',
        {
            filetypes: {
                '.less': {
                    syntax: 'postcss-less',
                },
            },
            exclude: '\\.global\\.less$',
            // This pattern also exists in udemy-django/static/webpack/helpers/less-loaders.js.
            generateScopedName: '[name]--[local]--[hash:base64:5]',
        },
    ],

    // Deduplication helpers
    ['@babel/plugin-external-helpers'],
];
