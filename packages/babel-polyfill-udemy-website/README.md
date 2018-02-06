Udemy Babel Polyfill
====================

This is the main polyfill used by our 
[`udemy/website-django/static/`](https://github.com/udemy/website-django/tree/master/static/src/udemy/js/entry/main.js#L1) codebase.

# Installation

Install [Babel](https://www.github.com/babel/babel) locally.

    $ yarn add babel

Install the Udemy Babel polyfill locally.

    $ yarn add babel-polyfill-udemy-website

# Configuration

At the top of your entry JavaScript file `import` the Udemy Babel polyfill.

```js
// At index.js

import 'babel-polyfill-udemy-website';
```

# Contributing

See [Contributing](/README.md#contributing).