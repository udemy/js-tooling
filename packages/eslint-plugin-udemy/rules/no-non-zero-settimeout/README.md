# No Non-Zero setTimeout

`settimeout/no-nonzero` rule checks for any uses of `window.setTimeout` with a non-zero delay value.

## Rule details

This rule takes no arguments.

The following patterns are considered warnings:

```js

setTimeout(100);

setTimeout(-100);

setTimeout(function (val) {}, 100);

setTimeout(function (val) { return val * 2 }, 100);

```

The following patterns are not considered warnings:

```js

setTimeout();

setTimeout(function (val) { return val * 2 });

setTimeout(0);

setTimeout(function (val) {}, 0);

```
