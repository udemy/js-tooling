Udemy ESLint Config for Babel
=============================

This configuration groups [*Babel*](https://github.com/babel/babel) specific ESLint rules.
It is recommended to be used by any Babel compiled codebase developed at Udemy. 
It is mainly used by [`eslint-config-udemy-website`](packages/eslint-config-udemy-website).

# Installation

Install [ESLint](https://www.github.com/eslint/eslint) locally.

    $ yarn add eslint --dev

Install the Udemy ESLint Config for Babel locally.

    $ yarn add eslint-config-udemy-babel-addons --dev

# Configuration

Add an `extends` section to your `.eslintrc.js` and specify `udemy-babel-addons` as an extended configuration.
You can additionally adjust rules by overriding them in your `rules` section.

```js
// At .eslintrc.js

module.exports = {
    'extends': ['udemy-babel-addons'],
    rules: {
        'import/no-commonjs': 'off',
    },
};
```

# Contributing

See [Contributing](/README.md#contributing).