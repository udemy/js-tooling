Udemy ESLint Config for React
=============================

This configuration groups [*React*](https://github.com/facebook/react) specific ESLint rules.
It is recommended to be used by any React codebase developed for Udemy. 
It is mainly used by [`eslint-config-udemy-website`](packages/eslint-config-udemy-website).

# Installation

Install [ESLint](https://www.github.com/eslint/eslint) locally.

    $ yarn add eslint --dev

Install Udemy ESLint Plugin locally.

    $ yarn add eslint-config-udemy-react-addons --dev

# Configuration

Add an `extends` section to your `.eslintrc.js` and specify `udemy-react-addons` as an extended configuration.
You can additionally adjust rules by overriding them at your `rules` section.

# Contributing

Contributions are always welcome! The main approach described at 
[top-level Contributing section](/#contributing) applies to this package, as all packages.