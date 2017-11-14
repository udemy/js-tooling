const fs = require('fs');
const path = require('path');

const rules = fs.readdirSync(path.resolve(__dirname, 'rules'));

module.exports = {
    rules: Object.assign({},
        // eslint-disable-next-line import/no-dynamic-require
        ...rules.map(rule => require(`./rules/${rule}`).rules)
    ),
};
