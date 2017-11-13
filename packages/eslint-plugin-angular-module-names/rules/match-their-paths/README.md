# Match Their Paths

`angular-module-names/match-their-paths` rule checks the consistency between `angular.module('name', ...)` 
and file's name. 

The main difference between this rule and [`angular/file-name`](https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/rules/file-name.md) 
is the module name should be the filesystem path of the file from the root (the second argument of this rule) and 
it works only for `angular.module('name', ...)`, not for other `angular` methods for creation components, in 
`angular/file-name` it can't be configured. Available fixing.

## Rule Details

This rule takes no arguments.

The following patterns are considered warnings:

```js 

// in some-path/that-has/some-nice.ng-directive.js

angular.module('some-random/module-name', () => {});

```

The following patterns are not considered warnings:

```js

// in some-path/that-has/some-nice.ng-directive.js

angular.module('some-path/that-has/some-nice.ng-directive', () => {});
 
```
