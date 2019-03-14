"use strict";

import "core-js/modules/es7.promise.finally";
import "core-js/modules/es7.symbol.async-iterator";
import "core-js/modules/web.timers";
import "core-js/modules/web.immediate";
import "core-js/modules/web.dom.iterable";
import "regenerator-runtime/runtime";

var _class;

import someDecorator from 'some-decorator';

var SomeClass = someDecorator(_class = function SomeClass() {
  babelHelpers.classCallCheck(this, SomeClass);
}) || _class;

export { SomeClass as default };
