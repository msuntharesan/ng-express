var di = require('ng-di'),
	ngExpress = require('../src'),
	homeController = require('./controllers/home');

di.module('app', ['ng-express-app'])
	.config(function ($expressProvider, $routeProvider) {
		var router = $routeProvider.router;
		router.get('/', function(req, res){
			res.send('Hello World');
		});
	})
	.run(function($express){
		console.log('Listening on port 4000');
		$express.listen(4000);
	})
	.provider('homeController', homeController);
di.injector(['app']);