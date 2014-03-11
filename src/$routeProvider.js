var  express = require('express');

module.exports = $routeProvider;

$routeProvider.$inject = ['$expressProvider'];
function $routeProvider ($expressProvider){
	this.router = express.Router();
	$expressProvider.app.use('/', this.router);

	this.get=function(path, fn){
		this.router.get(path, fn);
	};

	this.$get = function(){
		return this.router;
	};
}

