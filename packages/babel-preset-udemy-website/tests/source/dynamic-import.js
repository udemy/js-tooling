function f() {
    return import('./arrows').then(() => undefined);
}

f();
