# No setTimeout

`udemy/no-settimeout` rule checks for any uses of `window.setTimeout.

## Rule details

This rule takes no arguments.

The following patterns are considered warnings:

```js
setTimeout();

setTimeout(function (val) { return val * 2 });

setTimeout(0);

setTimeout(function (val) {}, 0);

setTimeout(100);

setTimeout(-100);

setTimeout(function (val) {}, 100);

setTimeout(function (val) { return val * 2 }, 100);
```

The following patterns are not considered warnings:

```js
await delay();
```
