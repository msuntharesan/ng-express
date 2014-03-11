var express = require('express');

module.exports = $expressProvider;
function $expressProvider() {
	var app;
	app = express();
	this.app = app;

	this.$get = function(){
		return this.app;
	};
}
