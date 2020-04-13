"use strict";

import "core-js/modules/es6.number.is-finite";
import "core-js/modules/es6.number.is-nan";
import "core-js/modules/es6.object.is";
import "core-js/modules/es6.string.anchor";
import "core-js/modules/es6.string.big";
import "core-js/modules/es6.string.blink";
import "core-js/modules/es6.string.bold";
import "core-js/modules/es6.string.fixed";
import "core-js/modules/es6.string.fontcolor";
import "core-js/modules/es6.string.fontsize";
import "core-js/modules/es6.string.italics";
import "core-js/modules/es6.string.link";
import "core-js/modules/es6.string.small";
import "core-js/modules/es6.string.strike";
import "core-js/modules/es6.string.sub";
import "core-js/modules/es6.string.sup";
import "core-js/modules/web.timers";
import "core-js/modules/web.immediate";
import "core-js/modules/web.dom.iterable";
import "regenerator-runtime/runtime";

var _obj$foo, _obj$foo$bar, _obj$qux, _obj$foo$bar$qux, _obj$foo$bar2;

var obj = {
  foo: {
    bar: {
      baz: function baz() {
        return 42;
      }
    }
  }
}; // All the way down to baz

var baz = obj === null || obj === void 0 ? void 0 : (_obj$foo = obj.foo) === null || _obj$foo === void 0 ? void 0 : (_obj$foo$bar = _obj$foo.bar) === null || _obj$foo$bar === void 0 ? void 0 : _obj$foo$bar.baz(); // Calling function on non exsting .qux

var safe = obj === null || obj === void 0 ? void 0 : (_obj$qux = obj.qux) === null || _obj$qux === void 0 ? void 0 : _obj$qux.baz(); // Calling function that does not exist

var safe2 = obj === null || obj === void 0 ? void 0 : (_obj$foo$bar$qux = (_obj$foo$bar2 = obj.foo.bar).qux) === null || _obj$foo$bar$qux === void 0 ? void 0 : _obj$foo$bar$qux.call(_obj$foo$bar2);
export default [baz, safe, safe2];
