'use strict';

var define = require('define-properties');
var callBind = require('call-bind');
var callBound = require('call-bind/callBound');
var RequireObjectCoercible = require('es-abstract/2020/RequireObjectCoercible');

var implementation = require('./implementation');
var getPolyfill = require('./polyfill');
var polyfill = getPolyfill();
var shim = require('./shim');

var $slice = callBound('Array.prototype.slice');

var bound = callBind.apply(polyfill);
// eslint-disable-next-line no-unused-vars
var boundCoercible = function forEach(array, callbackfn) {
	RequireObjectCoercible(array);
	return bound(array, $slice(arguments, 1));
};

define(boundCoercible, {
	getPolyfill: getPolyfill,
	implementation: implementation,
	shim: shim
});

module.exports = boundCoercible;
