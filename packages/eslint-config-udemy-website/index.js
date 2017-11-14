function resolve(it) {
    return require.resolve(`eslint-config-udemy-${it}`);
}

module.exports = {
    'extends': [
        resolve('basics'),
        resolve('react-addons'),
        resolve('jasmine-addons'),
    ],
};
