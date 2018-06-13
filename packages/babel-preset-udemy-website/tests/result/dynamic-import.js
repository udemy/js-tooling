"use strict";

import '../babel-polyfill';

function f() {
  return import('./arrows').then(function () {
    return undefined;
  });
}

export default f();
