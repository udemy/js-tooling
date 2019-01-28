'use strict';

const RuleTester = require('eslint').RuleTester;
const path = require('path');

const rule = require('./index').rules['angular-path-based-module-names'];

const ruleTester = new RuleTester();
const relativePath = path.relative(process.cwd(), __dirname);
const settings = {
    udemy: {
        srcPath: __dirname,
    },
};
const filename1 = path.join(__dirname, 'foo/bar.js');
const filename2 = path.join(__dirname, 'bar/foo.js');

ruleTester.run('match-their-paths', rule, {
    valid: [
        {
            code: 'angular.module("foo/bar")',
            filename: filename1,
            settings,
        },
        {
            code: 'angular.module("bar/foo")',
            filename: filename2,
            settings,
        },
        {
            code: `angular.module("${relativePath}/foo/bar")`,
            filename: filename1,
        },
        {
            code: `angular.module("${relativePath}/bar/foo")`,
            filename: filename2,
        },
    ],
    invalid: [
        {
            code: 'angular.module("bar/foo")',
            errors: [{message: "Angular module name must match file's relative path: `foo/bar`"}],
            filename: filename1,
            settings,
        },
        {
            code: 'angular.module("foo/bar")',
            errors: [{message: "Angular module name must match file's relative path: `bar/foo`"}],
            filename: filename2,
            settings,
        },
        {
            code: 'angular.module("bar/foo")',
            errors: [
                {
                    message: `Angular module name must match file's relative path: \`${relativePath}/foo/bar\``,
                },
            ],
            filename: filename1,
        },
        {
            code: 'angular.module("foo/bar")',
            errors: [
                {
                    message: `Angular module name must match file's relative path: \`${relativePath}/bar/foo\``,
                },
            ],
            filename: filename2,
        },
    ],
});
