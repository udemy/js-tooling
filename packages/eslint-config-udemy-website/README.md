Udemy ESLint Config for our Website
===================================

This is the main configuration used by our 
[`udemy/website-django/static/`](https://github.com/udemy/website-django/tree/master/static/.eslintrc.js) codebase. 
It extends from most of other packages seen in this repository.

# Installation

Install [ESLint](https://www.github.com/eslint/eslint) locally.

    $ yarn add eslint --dev

Install Udemy ESLint Plugin locally.

    $ yarn add eslint-config-udemy-website --dev

# Configuration

Add an `extends` section to your `.eslintrc.js` and specify `udemy-website` as an extended configuration.
You can additionally adjust rules by overriding them at your `rules` section.

# Contributing

Contributions are always welcome! The main approach described at 
[top-level Contributing section](/#contributing) applies to this package, as all packages.