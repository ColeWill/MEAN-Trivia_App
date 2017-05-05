
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
		if(err){
			console.log('seed.js db.quote.remvove', err);
		}
		console.log('removed all quotes from mongo db');
		db.FlashCard.create(flashArray, function(err, cards){
			if(err){
				return console.log('seed.js db.Quote.create', err);
			}
			console.log('added '+flashArray.length+" to mongoDB");
			process.exit();
		});
	});
	


