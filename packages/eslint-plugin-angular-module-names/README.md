Angular Module Names ESLint Plugin
===================

`angular.module('name')` linting rules for ESLint.

# Installation

Install [ESLint](https://www.github.com/eslint/eslint) locally.

    $ yarn add eslint --dev

Install Angular Module Names ESLint Plugin locally.

    $ yarn add eslint-plugin-angular-module-names --dev

# Configuration

Add a `plugins` section and specify `angular-module-names` as a plugin.
You can additionally add settings for the plugin.

# List of provided rules

* [angular-module-names/match-their-paths](rules/match-their-paths): 
Checks the consistency between `angular.module('name', ...)` and file's name.

# Contributing

Contributions are always welcome! For more info, please get in touch with @udemy/team-f team. In a nutshell:

1. Run `npm install` to install all dependencies.
1. Make your desired changes to any rule under `rules` folder. Or add a new rule under `rules` folder
following the existing code pattern.
1. *Do* update `version` number in `package.json` file as necessary.
1. Run `npm run test` and make sure all tests and lints are passing.
1. Finally, run `npm publish` to publish your changes to npm.

# License

(c) Copyright 2017 Udemy, Inc., all rights reserved.
