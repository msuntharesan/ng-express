var express = require("express"),
	fs = require('fs'),
	path = require('path'),
	_ = require('lodash'),
	di = require('ng-di'),
	$expressProvider = require('./$expressProvider'),
	$routeProvider = require('./$routeProvider');

/**
 * Expose ngExpress function as a module
 * @type {ngExpress}
 */

var ngModule = di.module('ng-express-app', [])
	.constant('VERSION', require('pkginfo')(module, 'version'))
	.provider('$express', $expressProvider)
	.provider('$route', $routeProvider);

di.injector(['ng-express-app']);
module.exports = ngModule;
