"use strict";

import '../babel-polyfill';

function React() {}

function Component() {}

export default [babelHelpers.objectSpread({
  a: 1
}, {
  b: 2
}), React.createElement(Component, Object.assign({
  a: 1
}, {
  b: 2
}))];
