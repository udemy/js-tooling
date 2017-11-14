const join = require('path').join;
const rule = require('./index').rules['angular-path-based-module-names'];
const RuleTester = require('eslint').RuleTester;

const ruleTester = new RuleTester();
const options = [__dirname];
const filename1 = join(__dirname, 'foo/bar.js');
const filename2 = join(__dirname, 'bar/foo.js');

ruleTester.run('match-their-paths', rule, {
    valid: [
        {
            code: 'angular.module("foo/bar")',
            options, filename: filename1,
        },
        {
            code: 'angular.module("bar/foo")',
            options, filename: filename2,
        },
        {
            code: 'angular.module("rules/angular-path-based-module-names/foo/bar")',
            filename: filename1,
        },
        {
            code: 'angular.module("rules/angular-path-based-module-names/bar/foo")',
            filename: filename2,
        },
    ],
    invalid: [
        {
            code: 'angular.module("bar/foo")',
            errors: [{ message: 'Angular module name must match file\'s relative path: `foo/bar`' }],
            options, filename: filename1,
        },
        {
            code: 'angular.module("foo/bar")',
            errors: [{ message: 'Angular module name must match file\'s relative path: `bar/foo`' }],
            options, filename: filename2,
        },
        {
            code: 'angular.module("bar/foo")',
            errors: [{ message: 'Angular module name must match file\'s relative path: `rules/angular-path-based-module-names/foo/bar`' }],
            filename: filename1,
        },
        {
            code: 'angular.module("foo/bar")',
            errors: [{ message: 'Angular module name must match file\'s relative path: `rules/angular-path-based-module-names/bar/foo`' }],
            filename: filename2,
        },
    ],
});
