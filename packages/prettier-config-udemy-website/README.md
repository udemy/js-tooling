Udemy Prettier Config
=========================

This configuration provides a basis for any ES2015 JavaScript code developed at Udemy. 
It is mainly used by [`udemy/website-django/static`](https://github.com/udemy/website-django/tree/master/static/.prettierrc.js)
and [`udemy/website-django/e2e`](https://github.com/udemy/website-django/tree/master/e2e/.prettierrc.js).

# Installation

Install [Prettier](https://github.com/prettier/prettier) locally.

    $ yarn add prettier --dev

Install the Udemy Prettier Config locally.

    $ yarn add prettier-config-udemy-website --dev

# Configuration

Add a `require` section to your `.prettierrc.js` and specify `prettier-config-udemy-website` a required module.
You can additionally adjust rules by overriding them. E.g.:

```js
// A .prettierrc.js

module.exports = {
    ...require("prettier-config-udemy-website"),
    
    // Any overwrites.
    printWidth: 140,
    tabWidth: 4
};
```

# Contributing

See [Contributing](/README.md#contributing).
