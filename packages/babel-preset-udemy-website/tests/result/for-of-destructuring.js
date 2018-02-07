"use strict";

var array = new Array(1e3).fill(1);
var counter = 0;

for (var _iterator = array.entries(), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
  var _ref;

  if (_isArray) {
    if (_i >= _iterator.length) break;
    _ref = _iterator[_i++];
  } else {
    _i = _iterator.next();
    if (_i.done) break;
    _ref = _i.value;
  }

  var _ref2 = _ref,
      _ref3 = babelHelpers.slicedToArray(_ref2, 2),
      i = _ref3[0],
      val = _ref3[1];

  counter += i + val;
}module.exports = counter;