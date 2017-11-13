# No Non-Zero

`settimeout/no-nonzero` rule checks for any uses of `window.setTimeout` with a non-zero delay value.

## Rule Details

This rule takes no arguments.

The following patterns are considered warnings:

```js

setTimeout(function(){ alert("Hello"); }, 3000);

```

The following patterns are not considered warnings:

```js

setTimeout(function(){ alert("Hello"); }, 0);

```
