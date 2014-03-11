module.exports = homeController;
homeController.$inject = ['$routeProvider'];
function homeController($routeProvider) {
	$routeProvider.get('/home', function (req, res) {
		res.send('Hello World from DI');
	});
	this.$get = function(){
		return this;
	};
}
