function resolve(it) {
    return require.resolve(`eslint-config-udemy-${it}`);
}

module.exports = {
    extends: [
        resolve('base'),
        resolve('react'),
        resolve('jasmine')
    ],
};
