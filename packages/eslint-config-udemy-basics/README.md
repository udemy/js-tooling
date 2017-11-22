Udemy Basic ESLint Config
=========================

This configuration provides a basis for any ES2015 JavaScript code developed at Udemy. 
It is mainly used by [`udemy/website-django/axe`](https://github.com/udemy/website-django/tree/master/axe/.eslintrc.js) 
and [`udemy/website-django/e2e`](https://github.com/udemy/website-django/tree/master/e2e/.eslintrc.js).

# Installation

Install [ESLint](https://www.github.com/eslint/eslint) locally.

    $ yarn add eslint --dev

Install the Udemy Basic ESLint Config locally.

    $ yarn add eslint-config-udemy-basics --dev

# Configuration

Add an `extends` section to your `.eslintrc.js` and specify `udemy-basics` as an extended configuration.
You can additionally adjust rules by overriding them in your `rules` section. E.g.:

```js
// At .eslintrc.js

module.exports = {
    'extends': ['udemy-basics'],
    rules: {
        'promise/catch-or-return': 'off',
    },
};
```

# Contributing

See [Contributing](/#contributing).