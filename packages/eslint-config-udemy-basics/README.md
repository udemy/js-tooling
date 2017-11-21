Udemy ESLint Config for Jasmine
===============================

This configuration provides a basis for any ES2015 JS codebase developed for Udemy. 
It is mainly used by [`udemy/website-django/axe`](https://github.com/udemy/website-django/tree/master/axe/.eslintrc.js) 
and [`udemy/website-django/e2e`](https://github.com/udemy/website-django/tree/master/e2e/.eslintrc.js) codebases.

# Installation

Install [ESLint](https://www.github.com/eslint/eslint) locally.

    $ yarn add eslint --dev

Install Udemy ESLint Plugin locally.

    $ yarn add eslint-config-udemy-basics --dev

# Configuration

Add an `extends` section to your `.eslintrc.js` and specify `udemy-basics` as an extended configuration.
You can additionally adjust rules by overriding them at your `rules` section.

# Contributing

Contributions are always welcome! The main approach described at 
[top-level Contributing section](/#contributing) applies to this package, as all packages.