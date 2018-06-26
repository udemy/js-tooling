Udemy Babel Preset for our Website
===================================

This is the main configuration used by our 
[`udemy/website-django/static/`](https://github.com/udemy/website-django/tree/master/static/.babelrc) codebase.

# Installation

Install [Babel](https://www.github.com/babel/babel) locally. See this package's package.json
for the correct peer dependency version:

    $ yarn add @babel/core

Install the Udemy Babel Preset locally.

    $ yarn add babel-preset-udemy-website

# Configuration

Add an `extends` section to your `.babelrc` and specify `udemy` as an extended configuration.

```js
// At .babelrc

{
    "presets": ["udemy-website"]
}
```

# Contributing

See [Contributing](/README.md#contributing).
