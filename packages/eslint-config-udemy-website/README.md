Udemy ESLint Config for our Website
===================================

This is the main configuration used by our 
[`udemy/website-django/static/`](https://github.com/udemy/website-django/tree/master/static/.eslintrc.js) codebase. 
It extends from most of the other packages that are in this repository.

# Installation

Install [ESLint](https://www.github.com/eslint/eslint) locally.

    $ yarn add eslint --dev

Install the Udemy ESLint Plugin locally.

    $ yarn add eslint-config-udemy-website --dev

# Configuration

Add an `extends` section to your `.eslintrc.js` and specify `udemy-website` as an extended configuration.
You can additionally adjust rules by overriding them in your `rules` section. 

```js
// At .eslintrc.js

module.exports = {
    'extends': ['udemy-website'],
    rules: {
        'udemy/no-function-prototype': 'off',
    },
};
```

# Contributing

See [Contributing](/README.md#contributing).