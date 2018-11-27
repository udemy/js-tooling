Udemy ESLint Plugin
===================

This package has Udemy specific ESLint rules.

# Installation

Install [ESLint](https://www.github.com/eslint/eslint) locally.

    $ yarn add eslint --dev

Install the Udemy ESLint Plugin locally.

    $ yarn add eslint-plugin-udemy --dev

# Configuration

Add a `plugins` section to your `.eslintrc.js` and specify `udemy` as a plugin.
You can then add the rules provided by this plugin to your `rules` section.

# List of provided rules

* [udemy/import-blacklist](rules/import-blacklist): Blacklist certain imports in JS files.
* [udemy/angular-path-based-module-names](rules/angular-path-based-module-names): Require `angular.module` name to match relative file path.
* [udemy/no-function-prototype](rules/no-function-prototype): Prefer `_.noop` or `() => {}` over `Function.prototype`.
* [udemy/no-settimeout](rules/no-settimeout): Prevent `setTimeout` usages.
* [udemy/no-then](rules/no-then): Prevent `then` calls in favor of async / await.

# Contributing

See [Contributing](/README.md#contributing).

### Updating an existing rule

Just follow the approach described in the [top-level Contributing section](/#contributing), and do not forget to update
both the rule-specific `README.md` file and this package's 
[List of provided rules](#list-of-provided-rules) section.


### Adding a new rule

This repository has a set of custom ESLint rules implemented in the [`rules`](packages/eslint-plugin-udemy/rules)
folder. In order to create a new rule, you should:

1. Create a new folder under the [`rules`](packages/eslint-plugin-udemy/rules) folder with the desired rule name.
1. Implement the rule in an `index.js` file, following the existing examples. *You can also refer to ESLint's 
[Working with Rules](https://eslint.org/docs/developer-guide/working-with-rules) documentation to learn
more.*
1. Once the rule is implemented, create a `tests.js` file with tests for the rule (once again, following the existing 
examples).
again following existing examples. *You can refer to ESLint's 
[RuleTester](https://eslint.org/docs/developer-guide/nodejs-api#ruletester) documentation to learn more.*
1. Create a `README.md` file that describes the details of the rule, based on the
[`RULE_README_TEMPLATE.md`](packages/eslint-plugin-udemy/RULE_README_TEMPLATE.md) file.
1. Add an entry to the [List of provided rules](#list-of-provided-rules) above, and describe the rule in a sentence.
1. Push your changes, and continue with creating a PR, publishing to npm as described in
[Contributing](/README.md#contributing). 
