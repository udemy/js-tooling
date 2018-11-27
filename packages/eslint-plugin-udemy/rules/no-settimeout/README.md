# No setTimeout

`udemy/no-settimeout` rule checks for any uses of `window.setTimeout` and suggests the usage of `await delay()`.

`delay` is a simple utility funtion which [wraps `setTimeout` in a promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises#Creating_a_Promise_around_an_old_callback_API). 

## Rule details

This rule takes no arguments.

The following patterns are considered warnings:

```js
setTimeout();

window.setTimeout();
```

The following patterns are not considered warnings:

```js
await delay();
```
