var express = require ('express');
var bodyParser = require('body-parser');
var router = express.Router();

var db = require('./models');




///// flashCards_index  INDEX
router.get ('/flashcards', function flashCards_index(req,res){
	db.FlashCard.find({}, function (err, dbCards){
		if (err){
			console.log(err);
		}
		res.json(dbCards);
	});
});


////    findONE  FIND BY ID
router.get('/flashcards/:id', function findOne(req,res){
	
	db.FlashCard.findOne({_id: req.params.id}, function(err, dbCards){
		console.log(dbCards);
		res.json(dbCards);
	});
});

////// delQuote   DELETE
router.delete('/flashcards/:id', function delCard(req,res){
	var deleteId = req.params.id;
	db.FlashCard.findOneAndRemove({_id: deleteId}, function(er, cut){
		res.json(cut+" got cut out...");
	});
});


	/////////////  Post
router.post('/flashcards', function post(req,res){
	console.log(req.body);
	var post = new db.FlashCard({
		type: req.body.type,
		question: req.body.question,
		answer: req.body.answer
	});
	post.save(function(err,card){
		res.json(card);
	});

});

// ///////////////////  PUT
// router.put('/flashcards/:id', function put(req,res){
// 	var putId = req.params.id;
// 	console.log(putId+"putid");
// 	res.json(putId);
// 	db.FlashCard.findOne({_id: putId}, function(err, card){
// 		card.type = req.body.type;
// 		card.question = req.body.question;
// 		card.answer = req.body.answer;

// 		card.save(function(err, cardSave){
// 			if (err){
// 				res.json(err);
// 			}
// 			res.json(cardSave);
// 		});
// 	});
// });




module.exports = router;