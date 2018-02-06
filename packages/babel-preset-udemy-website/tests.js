'use strict';

const assert = require('assert');
const fs = require('fs');
const join = require('path').join;
const babel = require('babel-core');
const preset = require('./index');

fs.readdirSync(join(__dirname, 'tests/source')).filter(name => name.endsWith('.js')).forEach(name => {
    const result = babel.transformFileSync(join(__dirname, 'tests/source', name), preset).code;
    const expected = fs.readFileSync(join(__dirname, 'tests/result', name));
    // eslint-disable-next-line no-console
    console.log(`check ${name}`);
    assert.equal(result, expected);
});
