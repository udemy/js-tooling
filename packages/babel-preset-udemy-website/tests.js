'use strict';

/**
 * Usage: node packages/babel-preset-udemy-website/tests.js [--verbose] [--update]
 *
 * --verbose - Print more debugging information.
 * --update - Update the tests.
 *
 * Note, you have to run it from the base of the monorepo, otherwise the hashes that
 * babel-plugin-react-css-modules generates will be different--go figure.
 */

const babel = require('@babel/core');
const assert = require('assert');
const fs = require('fs');
const join = require('path').join;

const preset = require('./index');

const MODE = Object.freeze({
    TEST: 'TEST',
    UPDATE: 'UPDATE',
});
let mode = MODE.TEST;
let verbose = false;

process.argv.forEach(val => {
    if (!val.startsWith('--')) {
        // Skip "node" and "tests.js" if present.
        return;
    }
    if (val === '--verbose') {
        verbose = true;
    } else if (val === '--update') {
        mode = MODE.UPDATE;
    } else {
        throw new Error(`Unknown argument: ${val}`);
    }
});

// eslint-disable-next-line no-console
console.log('test babel-preset-udemy-website');

fs.readdirSync(join(__dirname, 'tests/source')).filter(name => name.endsWith('.js')).forEach(name => {
    const result = babel.transformFileSync(join(__dirname, 'tests/source', name), preset()).code;
    const expected = fs.readFileSync(join(__dirname, 'tests/result', name), { encoding: 'UTF-8' });

    // eslint-disable-next-line no-console
    console.log(`\tcheck ${name}`);

    if (verbose && result.trim() !== expected.trim()) {
        /* eslint-disable no-console */
        console.log('===== expected =====');
        console.log(expected);
        console.log('===== result =====');
        console.log(result);
        /* eslint-enable no-console */
    }

    if (mode === MODE.TEST) {
        assert.equal(result.trim(), expected.trim());
    } else if (mode === MODE.UPDATE) {
        fs.writeFileSync(join(__dirname, 'tests/result', name), `${result}\n`, { encoding: 'UTF-8' });
    }
});
