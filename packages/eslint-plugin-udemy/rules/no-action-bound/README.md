# No @action.bound

`udemy/no-action-bound` rule checks for any uses of `@action.bound` and
provides a fix using two separate decorators: `@autobind @action`.

This rule prevents the use of `@action.bound` in favor of of the more explicit
`@autobind @action` to maintain consistency and clarity.

## Rule details

This rule takes no arguments.

The following patterns are considered warnings:

```js

@action.bound myMethod() {};

```

The following patterns are not considered warnings:

```js

@action myMethod() {};

@autobind @action myMethod() {};
 
```
