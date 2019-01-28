ESLint Config Tester
=============================

`eslint-config-tester` is a utility library to write tests for ESLint configurations. It relies on 
[`eslint.CLIEngine`](https://eslint.org/docs/developer-guide/nodejs-api#cliengine) to run configurations.

# Installation

Install [ESLint](https://www.github.com/eslint/eslint) locally.

    $ yarn add eslint --dev

Install the ESlint Config Tester locally.

    $ yarn add eslint-config-tester --dev

# Usage

`eslint-config-tester` exposes a single `runOnText` method. This method lets you run any given configuration
against a JavaScript snippet. It throws an error if the configuration has any problems or the JavaScript snippet
violates the rules set by the configuration.

```js
'use strict';

const eslintConfigTester = require('eslint-config-tester');
const path = require('path');

const pathToEslintConfig = path.resolve(__dirname, 'index.js');
const jsSnippetToTest = "const hello = 'world';\nexport default hello;\n";

eslintConfigTester.prettierCheck(
    pathToYourEslintConfig,
);

eslintConfigTester.runOnText(
    pathToYourEslintConfig,
    jsSnippetToTest
);
```

# Contributing

See [Contributing](/README.md#contributing).