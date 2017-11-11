module.exports = {
    extends: require('fs').readdirSync(require('path').join(__dirname, 'parts'))
        .filter(name => name.endsWith('.js'))
        .map(name => `./parts/${name}`),
};
