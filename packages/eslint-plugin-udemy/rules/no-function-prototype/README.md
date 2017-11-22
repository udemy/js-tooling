# No Function.prototype

`udemy/no-function-prototype` rule checks for any uses of `Function.prototype` and suggests using
[underscore](https://github.com/jashkenas/underscore)'s `_.noop`, or [lodash](https://github.com/lodash/lodash)'s 
`_.noop`, or an arrow function, `() => {}` instead. 

This rule prevents some of the weird errors when `Function.prototype`
 is used as a `defaultProp` value for a [React](https://github.com/facebook/react) component (e.g.
`func.apply is not a function`, which seems to be related with [Raven.js](https://github.com/getsentry/raven-js); or 
`timeupdate` event handlers only fire once instead of on every time update).

## Rule details

This rule takes no arguments.

The following patterns are considered warnings:

```js

functionWithCallback(function(){});

const emptyFunction = () => {};

const emptyFunction = Function.prototype;

```

The following patterns are not considered warnings:

```js

functionWithCallback(function(x){return x + 1});

const sqr = x => x * x;
 
```
