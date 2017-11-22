Udemy ESLint Config for React
=============================

This configuration groups [*React*](https://github.com/facebook/react) specific ESLint rules.
It is recommended to be used by any React codebase developed at Udemy. 
It is mainly used by [`eslint-config-udemy-website`](packages/eslint-config-udemy-website).

# Installation

Install [ESLint](https://www.github.com/eslint/eslint) locally.

    $ yarn add eslint --dev

Install the Udemy ESLint Config for React locally.

    $ yarn add eslint-config-udemy-react-addons --dev

# Configuration

Add an `extends` section to your `.eslintrc.js` and specify `udemy-react-addons` as an extended configuration.
You can additionally adjust rules by overriding them in your `rules` section.

```js
// At .eslintrc.js

module.exports = {
    'extends': ['udemy-react-addons'],
    rules: {
        'react/jsx-no-bind': 'off',
    },
};
```

# Contributing

See [Contributing](/README.md#contributing).