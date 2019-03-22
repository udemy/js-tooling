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
var array = new Array(1e3).fill(1);
var counter = 0;
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = array.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var _step$value = babelHelpers.slicedToArray(_step.value, 2),
        i = _step$value[0],
        val = _step$value[1];

    counter += i + val;
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator["return"] != null) {
      _iterator["return"]();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

export default counter;
