"use strict";

var _class, _class2, _descriptor;

import '../babel-polyfill';

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

    var _temp, _this;

    babelHelpers.classCallCheck(this, Class);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return babelHelpers.possibleConstructorReturn(_this, (_temp = _this = babelHelpers.possibleConstructorReturn(this, (_babelHelpers$getProt = babelHelpers.getPrototypeOf(Class)).call.apply(_babelHelpers$getProt, [this].concat(args))), babelHelpers.initializerDefineProperty(_this, "prop1", _descriptor, babelHelpers.assertThisInitialized(babelHelpers.assertThisInitialized(_this))), _this.prop2 = 14, _temp));
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
  enumerable: true,
  initializer: function initializer() {
    return 13;
  }
}), babelHelpers.applyDecoratedDescriptor(_class2.prototype, "method1", [deco], Object.getOwnPropertyDescriptor(_class2.prototype, "method1"), _class2.prototype), babelHelpers.applyDecoratedDescriptor(_class2.prototype, "getter", [deco], Object.getOwnPropertyDescriptor(_class2.prototype, "getter"), _class2.prototype)), _class2)) || _class;

export { Class as default };
