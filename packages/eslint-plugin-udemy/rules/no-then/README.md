# No then

`udemy/no-then` rule checks for any uses of `then` and suggests using await / async instead. As with a lot of rules in ESLint, there are valid times when you'll want to break this rule, but you can treat each such situation on a case-by-case basis by using eslint-disable-next-line.

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
