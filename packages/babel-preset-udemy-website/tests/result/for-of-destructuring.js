"use strict";

var array = new Array(1e3).fill(1);
var counter = 0;

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = array.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var _ref = _step.value;

    var _ref2 = babelHelpers.slicedToArray(_ref, 2);

    var i = _ref2[0];
    var val = _ref2[1];
    counter += i + val;
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator.return) {
      _iterator.return();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

module.exports = counter;
