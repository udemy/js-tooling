# Angular Path Based Module Names

`udemy/angular-path-based-module-names` rule requires your `angular.module` name to match the path of the file the 
module is in relative to some specified root.

There's another rule, [`angular/file-name`](https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/rules/file-name.md), 
which can be used to ensure that the `angular.module` name follows some established pattern. However, that rule doesn't 
pay any attention to the name of the file the module is in. Hence, it permits files and modules to be named radically 
different things.

## Rule details

This rule takes no arguments.

The following patterns are considered warnings:

```js 

// in some-path/that-has/some-nice-directive.js

angular.module('some-random/module-name', () => {});

```

The following patterns are not considered warnings:

```js

// in some-path/that-has/some-nice-directive.js

angular.module('some-path/that-has/some-nice-directive', () => {});
 
```
