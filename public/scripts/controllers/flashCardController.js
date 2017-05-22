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
	self.hideCard = hideCard;
	self.answer = answer;


	self.showAnswerVar = false;

	function getCards(){
		$http
		.get('/flashcards')
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

	function hideCard(card){

		var index = self.all.indexOf(card);
		self.all.splice(index,1);
		
	}

	function answer(card){
		

		var index = self.all.indexOf(card);
		console.log(self.all[index]);


		//get index of card passed in
		var myDiv = $('.flashCard')[index];
		//get the flash card div with the same index save it in myDiv
		var span = myDiv.getElementsByTagName('span')[0];
		//get the first span in that div and save it in span
		$(span).append(card.answer);
		//append the answer to that span
		myDiv.getElementsByTagName('button')[0].onClick = function(){
			
		};
		

	}
	
}
	
	
