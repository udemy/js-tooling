'use strict';

import React, { Component } from 'react';

import './css-modules.less';

var CssModules = function (_Component) {
    babelHelpers.inherits(CssModules, _Component);

    function CssModules() {
        babelHelpers.classCallCheck(this, CssModules);
        return babelHelpers.possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    CssModules.prototype.render = function render() {
        return React.createElement(
            'div',
            { className: 'css-modules--greeting--3-JKt' },
            'Hello World!'
        );
    };

    return CssModules;
}(Component);

export { CssModules as default };
