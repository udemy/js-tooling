'use strict';

module.exports = {
    singleQuote: true,
    tabWidth: 4,
    trailingComma: 'all',

    // Although this is a change to our style, it makes sense if you consider the following:
    //
    //   * The "Print Width" warning on: https://prettier.io/docs/en/options.html
    //   * We use 4 space indentation instead of 2
    //   * We use 100 character line limits in Python
    printWidth: 100,

    // Although this is a change to our style, it makes the following scenarios all consistent:
    //
    //   * JavaScript object literals
    //   * JSX properties
    //   * JavaScript string interpolation
    //   * Python dicts
    bracketSpacing: false,
};
