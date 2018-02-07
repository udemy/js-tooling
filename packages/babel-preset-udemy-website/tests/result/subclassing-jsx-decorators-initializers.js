"use strict";

var _class, _desc, _value, _class2, _descriptor;

function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
}

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

function React() {}
function Component() {}
function Element() {}
function deco() {}

var Class = deco(_class = (_class2 = function (_Component) {
    babelHelpers.inherits(Class, _Component);

    function Class() {
        var _temp, _this, _ret;

        babelHelpers.classCallCheck(this, Class);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = babelHelpers.possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _initDefineProp(_this, "prop1", _descriptor, _this), _this.prop2 = 14, _temp), babelHelpers.possibleConstructorReturn(_this, _ret);
    }

    Class.prototype.method1 = function method1() {};

    Class.prototype.method2 = function method2() {};

    Class.prototype.render = function render() {
        return React.createElement(
            "div",
            null,
            React.createElement(Element, { store: this.store })
        );
    };

    babelHelpers.createClass(Class, [{
        key: "getter",
        get: function get() {
            return 42;
        }
    }]);
    return Class;
}(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "prop1", [deco], {
    enumerable: true,
    initializer: function initializer() {
        return 13;
    }
}), _applyDecoratedDescriptor(_class2.prototype, "method1", [deco], Object.getOwnPropertyDescriptor(_class2.prototype, "method1"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "getter", [deco], Object.getOwnPropertyDescriptor(_class2.prototype, "getter"), _class2.prototype)), _class2)) || _class;

module.exports = Class;