'use strict';

const raw = require('./raw');
const dynamicRequire = type => config => {
    const [name, options] = config;
    // eslint-disable-next-line import/no-dynamic-require
    const module = require(`babel-${type}-${name}`);
    return [module.default || module, options || {}];
};

module.exports = {
    presets: raw.presets.map(dynamicRequire('preset')),
    plugins: raw.plugins.map(dynamicRequire('plugin')),
};
