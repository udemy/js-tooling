'use strict';

function f() {
    return import('./arrows').then(function () {
        return undefined;
    });
}

f();