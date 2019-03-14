"use strict";

import "core-js/modules/es7.promise.finally";
import "core-js/modules/es7.symbol.async-iterator";
import "core-js/modules/web.timers";
import "core-js/modules/web.immediate";
import "core-js/modules/web.dom.iterable";
import "regenerator-runtime/runtime";

function f() {
  return import('./arrows').then(function () {
    return undefined;
  });
}

export default f();
