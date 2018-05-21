'use strict';

/**
 * Default `core-js` / `babel-polyfill` versions contains too many not required in our case polyfills:
 * - required only in old engines polyfills - we don't wanna support engines like IE6-IE9
 * - polyfills for early stage proposals
 * - polyfills for deprecated annex-b features
 * - polyfills for rejected proposals or removed from the spec features
 * - typed arrays polyfill is enough large and not required for our case
 * - etc
 *
 * So it's a config - list of required polyfills.
 *
 * Usage `core-js/modules` is not recommended, but allows configure polyfills with maximum flexibility.
 */

// ES2015
require('core-js/modules/es6.symbol');
require('core-js/modules/es6.object.get-own-property-descriptor');
require('core-js/modules/es6.object.get-prototype-of');
require('core-js/modules/es6.object.keys');
require('core-js/modules/es6.object.get-own-property-names');
require('core-js/modules/es6.object.freeze');
require('core-js/modules/es6.object.seal');
require('core-js/modules/es6.object.prevent-extensions');
require('core-js/modules/es6.object.is-frozen');
require('core-js/modules/es6.object.is-sealed');
require('core-js/modules/es6.object.is-extensible');
require('core-js/modules/es6.object.assign');
require('core-js/modules/es6.object.is');
require('core-js/modules/es6.object.to-string');
require('core-js/modules/es6.object.set-prototype-of');
require('core-js/modules/es6.function.name');
require('core-js/modules/es6.parse-int');
require('core-js/modules/es6.parse-float');
require('core-js/modules/es6.number.constructor');
require('core-js/modules/es6.number.to-fixed');
require('core-js/modules/es6.number.to-precision');
require('core-js/modules/es6.number.epsilon');
require('core-js/modules/es6.number.is-finite');
require('core-js/modules/es6.number.is-integer');
require('core-js/modules/es6.number.is-nan');
require('core-js/modules/es6.number.is-safe-integer');
require('core-js/modules/es6.number.max-safe-integer');
require('core-js/modules/es6.number.min-safe-integer');
require('core-js/modules/es6.number.parse-float');
require('core-js/modules/es6.number.parse-int');
require('core-js/modules/es6.math.acosh');
require('core-js/modules/es6.math.asinh');
require('core-js/modules/es6.math.atanh');
require('core-js/modules/es6.math.cbrt');
require('core-js/modules/es6.math.clz32');
require('core-js/modules/es6.math.cosh');
require('core-js/modules/es6.math.expm1');
require('core-js/modules/es6.math.fround');
require('core-js/modules/es6.math.hypot');
require('core-js/modules/es6.math.imul');
require('core-js/modules/es6.math.log10');
require('core-js/modules/es6.math.log1p');
require('core-js/modules/es6.math.log2');
require('core-js/modules/es6.math.sign');
require('core-js/modules/es6.math.sinh');
require('core-js/modules/es6.math.tanh');
require('core-js/modules/es6.math.trunc');
require('core-js/modules/es6.string.from-code-point');
require('core-js/modules/es6.string.raw');
require('core-js/modules/es6.string.trim');
require('core-js/modules/es6.string.iterator');
require('core-js/modules/es6.string.code-point-at');
require('core-js/modules/es6.string.ends-with');
require('core-js/modules/es6.string.includes');
require('core-js/modules/es6.string.repeat');
require('core-js/modules/es6.string.starts-with');
require('core-js/modules/es6.array.from');
require('core-js/modules/es6.array.of');
require('core-js/modules/es6.array.sort');
require('core-js/modules/es6.array.copy-within');
require('core-js/modules/es6.array.fill');
require('core-js/modules/es6.array.find');
require('core-js/modules/es6.array.find-index');
require('core-js/modules/es6.array.iterator');
require('core-js/modules/es6.regexp.constructor');
require('core-js/modules/es6.regexp.flags');
require('core-js/modules/es6.regexp.match');
require('core-js/modules/es6.regexp.replace');
require('core-js/modules/es6.regexp.search');
require('core-js/modules/es6.regexp.split');
require('core-js/modules/es6.promise');
require('core-js/modules/es6.map');
require('core-js/modules/es6.set');
require('core-js/modules/es6.weak-map');
require('core-js/modules/es6.weak-set');
require('core-js/modules/es6.reflect.apply');
require('core-js/modules/es6.reflect.construct');
require('core-js/modules/es6.reflect.define-property');
require('core-js/modules/es6.reflect.delete-property');
require('core-js/modules/es6.reflect.get');
require('core-js/modules/es6.reflect.get-own-property-descriptor');
require('core-js/modules/es6.reflect.get-prototype-of');
require('core-js/modules/es6.reflect.has');
require('core-js/modules/es6.reflect.is-extensible');
require('core-js/modules/es6.reflect.own-keys');
require('core-js/modules/es6.reflect.prevent-extensions');
require('core-js/modules/es6.reflect.set');
require('core-js/modules/es6.reflect.set-prototype-of');

// ES2016
require('core-js/modules/es7.array.includes');

// ES2017
require('core-js/modules/es7.object.values');
require('core-js/modules/es7.object.entries');
require('core-js/modules/es7.object.get-own-property-descriptors');
require('core-js/modules/es7.string.pad-start');
require('core-js/modules/es7.string.pad-end');

// W3C / WHATWG
require('core-js/modules/web.immediate');
require('core-js/modules/web.dom.iterable');

// Regenerator runtime for Babel ES2015 generators and ES2017 async functions
require('regenerator-runtime/runtime');

// Babel's own helpers used internally but loaded externally
require('./babel-external-helpers');
