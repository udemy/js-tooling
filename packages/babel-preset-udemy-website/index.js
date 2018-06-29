'use strict';

const raw = require('./raw');
const dynamicRequire = config => {
    const [name, options] = config;
    // eslint-disable-next-line import/no-dynamic-require
    const module = require(name);
    return [module.default || module, options || {}];
};

module.exports = () => ({
    presets: raw.presets.map(dynamicRequire),
    plugins: raw.plugins.map(dynamicRequire),
});
