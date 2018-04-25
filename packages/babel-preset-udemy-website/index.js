'use strict';

const raw = require('./raw');

module.exports = {
    plugins: raw.plugins.map(it => {
        const name = it[0];
        const options = it[1] || {};
        // eslint-disable-next-line import/no-dynamic-require
        let plugin = require(`babel-plugin-${name}`);
        // https://github.com/loganfsmyth/babel-plugin-transform-builtin-extend/issues/1
        plugin = plugin.default || plugin;
        return [plugin, options];
    }),
};
