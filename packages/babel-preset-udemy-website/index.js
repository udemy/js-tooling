'use strict';

const {declare} = require('@babel/helper-plugin-utils');

const plugins = require('./plugins');

module.exports = declare((api, options) => {
    const modernBrowsers =
        'Chrome >= 71, Firefox >= 64, Safari >= 12, Opera >= 58, ChromeAndroid >= 71, FirefoxAndroid >= 64, iOS >= 12, OperaMobile >= 46';
    const legacyBrowsers = '> 0.2%, last 1 version, not dead';
    const browsers = options.environment === 'modern' ? modernBrowsers : legacyBrowsers;

    return {
        presets: [
            [
                '@babel/preset-env',
                {
                    // See:
                    //
                    //  * https://new.babeljs.io/docs/en/next/babel-preset-env.html
                    //  * https://github.com/browserslist/browserslist#queries
                    //  * http://browserl.ist/
                    //  * https://support.udemy.com/hc/en-us/articles/229231047-System-Requirements
                    //  * https://github.com/babel/babel/blob/master/packages/babel-preset-env/src/available-plugins.js
                    //
                    // To get some debugging information, add `debug: true`.
                    targets: {
                        browsers,
                    },
                    modules: false,
                    useBuiltIns: 'entry',
                    corejs: 2,
                    // Our current versions of webpack and UglifyJS don't understand the
                    // latest JS syntax, so force all transforms for now.
                    forceAllTransforms: true,
                },
            ],
            [
                '@babel/preset-react',
                {
                    useBuiltIns: true,
                },
            ],
        ],

        plugins,
    };
});
