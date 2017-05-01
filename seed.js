var db =require('./models');

var flashArray = [];
flashArray.push({
	type: 'computers',
	question: 'what is a disk?',
	answer: 'dont know'
});
flashArray.push({
	type: 'computers',
	question: 'what are the keys for?',
	answer: 'typing'
});
flashArray.push({
	type: 'computers',
	question: 'what is the best kind?',
	answer: 'apple'
});
flashArray.push({
	type: 'full-blown-nerd',
	question: 'what is a directive',
	answer: 'an angular extension of html elements'
});

db.FlashCard.remove({}, function(err,cards){
	console.log('cards taken out');
	db.FlashCard.create(flashArray,function(err,cards){

	});
	if(err){
		console.log(err);
	}
	console.log('added '+flashArray.length+' cards');
	process.exit();
});

