'use strict';

module.exports = {
    // Warning! Enabled `external-helpers` transform, so if you wanna add any plugin or change settings of existent -
    // make sure that all required helpers added to `build-external-helpers` task in our `package.json`.
    plugins: [
        // Legacy decorator transform with the old decorator behavior from Babel@5
        ['transform-decorators-legacy'],

        // ES2015 constants, static analysis
        ['check-es2015-constants'],

        // ES2017 async functions (syntax)
        ['syntax-async-functions'],

        // Dynamic imports in order to use Webpack's ModuleConcatenationPlugin
        ['syntax-dynamic-import'],

        // ES2017 trailing commas in functions and constructors calls and parameter lists
        ['syntax-trailing-function-commas'],

        // JSX (syntax)
        ['syntax-jsx'],

        // JSX (transform)
        // `useBuiltIns` option for usage `Object.assign` directly instead of `extends` helper
        ['transform-react-jsx', { useBuiltIns: true }],

        // Adds `.displayName` property to `React.createClass`
        ['transform-react-display-name'],

        // Stage-2 public class fields
        ['transform-class-properties'],

        // ES2015 template literals
        // Loose mode enabled for better performance.
        // `Object.freeze` and `Object.defineProperties` which used in the default mode works very slow.
        // Behavior is different from the standard only in unlikely and incorrect cases -
        // redefinition properties and `for-in` iteration over template object.
        ['transform-es2015-template-literals', { loose: true }],

        // ES2015 number octal and binary literals
        ['transform-es2015-literals'],

        // ES2015 adding functions `.name` property
        ['transform-es2015-function-name'],

        // ES2015 arrows
        ['transform-es2015-arrow-functions'],

        // ES2015 block scoped function declarations
        ['transform-es2015-block-scoped-functions'],

        // ES2015 classes
        // Some parts of this transform (like `super` -> class inheritance) will not work without loose mode in IE10.
        // Without loose mode `super` is critically slow, a switching-on loose mode can speedup some cases 100x+.
        // Behavior is different from the standard only in impossible (changing prototypes of existent classes and instances)
        // and unlikely (`for-in` iteration over class instance properties and `super` in accessors) cases for our project.
        ['transform-es2015-classes', { loose: true }],

        // ES2015 `super` in object literals
        ['transform-es2015-object-super'],

        // ES2015 shorthand properties and methods
        ['transform-es2015-shorthand-properties'],

        // ES2015 allow duplicate keys in object literals
        ['transform-es2015-duplicate-keys'],

        // ES2015 computed properties
        // Loose mode enabled for better performance - by default, for computed properties Babel uses `Object.defineProperty`,
        // but it's critically slow in almost all engines.
        // Behavior is different from the standard only with added to `Object.prototype` accessors (impossible case).
        ['transform-es2015-computed-properties', { loose: true }],

        // ES2015 for-of loops
        // Loose mode enabled for better performance - avoiding `try` blocks and optimisation iteration over arrays.
        // Behavior is different from the standard only in impossible in our project cases -
        // arrays with changed iterators and iteration over generators with `finally`.
        ['transform-es2015-for-of', { loose: true }],

        // ES2015 unicode escaping in regex literals
        ['transform-es2015-unicode-regex'],

        // ES2015 spread in array literals, functions and constructors calls
        // We don't use loose mode here because with loose mode it will work only with arrays.
        ['transform-es2015-spread'],

        // ES2015 rest and default parameters
        ['transform-es2015-parameters'],

        // ES2015 destructuring iterables
        // We don't use loose mode here because with loose mode it will work only with arrays-like objects.
        ['transform-es2015-destructuring'],

        // ES2015 block scoping (let, const)
        ['transform-es2015-block-scoping'],

        // Adds "use strict" to each file - webpack@2 adds it only for modules with ES6+ import / export
        ['transform-strict-mode'],

        // ES2016 exponentiation operator
        ['transform-exponentiation-operator'],

        // Stage-3 object rest / spread properties
        // `useBuiltIns` option for usage `Object.assign` directly instead of `extends` helper
        ['transform-object-rest-spread', { useBuiltIns: true }],

        // ES2015 generators and ES2017 async functions (transform)
        ['transform-regenerator', { generators: true, async: true, asyncGenerators: false }],

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
