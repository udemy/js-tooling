Udemy ESLint Config for Jasmine
===============================

This configuration groups [*Jasmine*](https://github.com/jasmine/jasmine) specific ESLint rules.
It is recommended to be used by any Jasmine codebase developed at Udemy. 
It is mainly used by [`eslint-config-udemy-website`](packages/eslint-config-udemy-website).

# Installation

Install [ESLint](https://www.github.com/eslint/eslint) locally.

    $ yarn add eslint --dev

Install the Udemy ESLint Config for Jasmine locally.

    $ yarn add eslint-config-udemy-jasmine-addons --dev

# Configuration

Add an `extends` section to your `.eslintrc.js` and specify `udemy-jasmine-addons` as an extended configuration.
You can additionally adjust rules by overriding them in your `rules` section.

```js
// At .eslintrc.js

module.exports = {
    'extends': ['udemy-jasmine-addons'],
    rules: {
        'jasmine/valid-expect': 'off',
    },
};
```

# Contributing

See [Contributing](/README.md#contributing).