'use strict';

const fs = require('fs');
const path = require('path');

const parts = fs.readdirSync(path.join(__dirname, 'parts'));

module.exports = {
    extends: parts.filter(name => name.endsWith('.js')).map(name => `./parts/${name}`),
};
