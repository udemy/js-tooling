"use strict";

function React() {}

function Component() {}

module.exports = [babelHelpers.objectSpread({
  a: 1
}, {
  b: 2
}), React.createElement(Component, Object.assign({
  a: 1
}, {
  b: 2
}))];
