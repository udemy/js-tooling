# No then

`udemy/no-then` rule checks for any uses of `then`

## Rule details

This rule takes no arguments.

The following patterns are considered warnings:

```js
promise.then();

myfunc(arg).then()
```

The following patterns are not considered warnings:

```js
await promise;
```
