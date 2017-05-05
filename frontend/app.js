// //all I need is .contoller ngRoute and .directive

angular.module('myApp', [ 'ngRoute'])
.controller('MyAppController', MyAppController)
.directive('directiveNew', directiveNew);




function directiveNew() {

	return {
		restrict: 'E',
		templateUrl: 'templates/dTemplate.html',
		scope: {
			varname: '@'
		}
	};
}



// function MyAppController($http) {
// 	console.log('myAppController working');
// 	var self = this;
	

// 	self.all = [];
// // 	// self.one = {};
// 	self.getCards = getCards;
// // 	// self.getOneCard = getOneCard; //name of route
// // 	// self.delCard= delCard; //name of route


//   function getCards(){
//     $http
//       .get('http://localhost:3000/flashcards')
//       .then(function(response){
//         self.all = response.data;
        
// 		console.log(self.all[0].question);
//     });
//   }

//   getCards();

// }


	