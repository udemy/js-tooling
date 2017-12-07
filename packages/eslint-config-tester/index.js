'use strict';

const assert = require('assert');
const eslint = require('eslint');

module.exports = {
    runOnText(configFile, text) {
        const cli = new eslint.CLIEngine({ configFile });
        const formatter = cli.getFormatter();
        const report = cli.executeOnText(text);
        const errorCount = report.results.reduce((count, result) => count + result.errorCount, 0);

        assert.strictEqual(
            errorCount, 0,
            `Should have no errors but had ${errorCount}:\n${formatter(report.results)}`
        );
    },
};
