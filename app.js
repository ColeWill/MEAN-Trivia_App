angular.module('myApp', ['ngRoute'])
	.controller('myAppController', myAppController)
	.directive('directiveNew', directiveNew)
	.config(routingStuff);
	// .factory('Factory', Factory);



// Factory.$inject = ['$http'];
// function factory($http) {
// 	var factoryMethods = {};
// 	factoryMethods.getAllThings = fucntion(){
// 		return $http.get("http://localhost:3000/")
// 	};
// };


routingStuff.$inject = ["$routeProvider"];
function routingStuff($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: "directiveTemplate.html"
		})
		.when('/about', {
			template: '<h1>This is what its all about!</h1>'
		});
}

	function directiveNew(){
		return {
			restrict: 'EA',
			templateUrl: 'directiveTemplate.html',
			scope:{
				varname: '@'
			}
		};
	}

	function myAppController(){
		console.log('myAppController working');
		var vm = this;
		vm.helloWorld = "Heller biches!";

	}