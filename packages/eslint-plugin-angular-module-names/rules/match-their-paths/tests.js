const join = require('path').join;
const rule = require('./index').rules['match-their-paths'];
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
            code: 'angular.module("foo/bar")',
            filename: filename1,
        },
        {
            code: 'angular.module("bar/foo")',
            filename: filename2,
        },
    ],
    invalid: [
        {
            code: 'angular.module("bar/foo")',
            errors: [{message: 'Angular module name should be related filesystem path'}],
            options, filename: filename1,
        },
        {
            code: 'angular.module("foo/bar")',
            errors: [{message: 'Angular module name should be related filesystem path'}],
            options, filename: filename2,
        },
        {
            code: 'angular.module("bar/foo")',
            errors: [{message: 'Angular module name should be related filesystem path'}],
            filename: filename1,
        },
        {
            code: 'angular.module("foo/bar")',
            errors: [{message: 'Angular module name should be related filesystem path'}],
            filename: filename2,
        },
    ]
});
