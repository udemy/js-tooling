# Decorator Order

`udemy/decorator-order` rule checks the order of `@autobind @action` on
method definitions and `@inject @observer` on class declarations.

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
