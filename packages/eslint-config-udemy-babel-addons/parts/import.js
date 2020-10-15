'use strict';

module.exports = {
    plugins: ['import'],
    settings: {
        'import/extensions': ['.js', '.json'],
    },
    rules: {
        // enforce a newline after import statements
        'import/newline-after-import': 'error',
        // forbid AMD imports
        'import/no-amd': 'error',
        // forbid CommonJS imports
        'import/no-commonjs': 'error',
        // ensure imports point to files / modules that can be resolved
        // 'import/no-unresolved': ['error', {commonjs: true, amd: true}],
        // disallow invalid exports, e.g. multiple defaults
        // 'import/export': 'error',
        // forbid import of modules using absolute paths
        'import/no-absolute-path': 'error',
        // forbid `require()` calls with expressions
        'import/no-dynamic-require': 'error',
        // do not allow a default import name to match a named export
        // 'import/no-named-as-default': 'error',
        // warn on accessing default export property names that are also named exports
        // 'import/no-named-as-default-member': 'error',
        // forbid named default exports
        // 'import/no-named-default': 'error',
        // forbid mutable exports
        'import/no-mutable-exports': 'error',
        // disallow non-import statements appearing before import statements
        'import/imports-first': 'error',
        // disallow importing from the same path more than once
        'import/no-duplicates': 'error',
        // require modules with a single export to use a default export
        'import/prefer-default-export': 'error',
    },
};
