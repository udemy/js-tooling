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

var _class, _class2, _descriptor;

function React() {}

function Component() {}

function Element() {}

function deco() {}

var Class = deco(_class = (_class2 =
/*#__PURE__*/
function (_Component) {
  babelHelpers.inherits(Class, _Component);

  function Class() {
    var _babelHelpers$getProt;

    var _this;

    babelHelpers.classCallCheck(this, Class);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = babelHelpers.possibleConstructorReturn(this, (_babelHelpers$getProt = babelHelpers.getPrototypeOf(Class)).call.apply(_babelHelpers$getProt, [this].concat(args)));
    babelHelpers.initializerDefineProperty(_this, "prop1", _descriptor, babelHelpers.assertThisInitialized(_this));
    _this.prop2 = 14;
    return _this;
  }

  babelHelpers.createClass(Class, [{
    key: "method1",
    value: function method1() {}
  }, {
    key: "method2",
    value: function method2() {}
  }, {
    key: "render",
    value: function render() {
      return React.createElement("div", null, React.createElement(Element, {
        store: this.store
      }));
    }
  }, {
    key: "getter",
    get: function get() {
      return 42;
    }
  }]);
  return Class;
}(Component), (_descriptor = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "prop1", [deco], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return 13;
  }
}), babelHelpers.applyDecoratedDescriptor(_class2.prototype, "method1", [deco], Object.getOwnPropertyDescriptor(_class2.prototype, "method1"), _class2.prototype), babelHelpers.applyDecoratedDescriptor(_class2.prototype, "getter", [deco], Object.getOwnPropertyDescriptor(_class2.prototype, "getter"), _class2.prototype)), _class2)) || _class;

export { Class as default };
