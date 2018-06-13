import '../babel-polyfill';

function f() {
    return import('./arrows').then(() => undefined);
}

export default f();
