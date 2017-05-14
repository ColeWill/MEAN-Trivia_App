angular.module('FlashCardApp',[])
.controller('FlashCardController',FlashCardController);

FlashCardController.$inject = ['$http'];
function FlashCardController($http){
	console.log('Controller Twerkin');
	var self = this;
	self.all = [];
	self.newCard = {};
	self.getCards = getCards;
	self.removeCard = removeCard;
	self.addNew = addNew;

	function getCards(){
		$http
		.get('http://localhost:4000/flashcards')
		.then(function(res){
			self.all = res.data;
			console.log("got the cards");
		});
	}
	getCards();

	function removeCard(card){
		console.log('removing id: '+card._id);
		$http
		.delete('/flashcards/'+ card._id)
		.then(function(res){
			var index = self.all.indexOf(card);
		self.all.splice(index,1);
		console.log('card '+index+' was removed');
	});
		
	}

	function addNew (){
		console.log('making a new card: '+self.newCard);
		$http
		.post('/flashcards', self.newCard)
		.then(function(res){
			console.log(res.data);
			getCards();
		});	
		self.newCard = {};
	}
	// function showAnswer(){
	// 	$('#showAnswer').click(function(){
	// 		self.answer
	// 	});
	// } 
}