# Decorator Order

`udemy/decorator-order` rule checks the relative order of `@autobind` and  `@action` in
method definitions and that `@observer` is inner-most in class declarations.

## Rule details

This rule takes no arguments.

The following patterns are considered warnings:

```js

@action @autobind  myMethod() {}

@observer @inject  MyClass() {}

```

The following patterns are *not* considered warnings:

```js

@autobind @action myMethod() {}

@inject @observer MyClass() {}
 
```
