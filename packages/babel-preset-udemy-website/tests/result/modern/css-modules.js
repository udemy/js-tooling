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
import _getClassName from "babel-plugin-react-css-modules/dist/browser/getClassName";
import React, { Component } from 'react';
import baseStyles from './css-modules.global.less';
import styles from './css-modules.less';
var _styleModuleImportMap = {
  "styles": {
    "greeting": "css-modules--greeting--3-JKt"
  }
};

var CssModules =
/*#__PURE__*/
function (_Component) {
  babelHelpers.inherits(CssModules, _Component);

  function CssModules() {
    babelHelpers.classCallCheck(this, CssModules);
    return babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(CssModules).apply(this, arguments));
  }

  babelHelpers.createClass(CssModules, [{
    key: "render",
    value: function render() {
      // styles.greeting can be evaluated at compile time.
      // baseStyles.colorful won't actually work at runtime since the *.global.less file is
      // ignored, but I'm testing that it doesn't try to actually output a lookup table
      // for baseStyles as it will for styles since I'm doing a dynamic styleName.
      return React.createElement("div", {
        className: "colorful css-modules--greeting--3-JKt"
      }, React.createElement("span", {
        className: _getClassName('baseStyles.colorful', _styleModuleImportMap)
      }, "Hello World!"));
    }
  }]);
  return CssModules;
}(Component);

export { CssModules as default };
