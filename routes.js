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


//post route broken
router.post('/flashcards', function postUp(request,response){
	console.log('post route hit');
	console.log(request.body);
	var postCard = new db.FlashCard(request.body);
	
	// 	type: req.body.type,
	// 	question: req.body.question,
	// 	answer: req.body.answer
	// });
	postCard.save(function(err, c){
		response.json("added "+ c+" to the db!" );
	});

router.put('/flashcards/:id', function put(req,res){
	var putId = req.params.id;
	console.log(putId+"putid");
	res.json(putId);
	db.FlashCard.findOne({_id: putId}, function(err, card){
		card.type = req.body.type;
		card.question = req.body.question;
		card.answer = req.body.answer;

		card.save(function(err, cardSave){
			if (err){
				res.json(err);
			}
			res.json(cardSave);
		});
	});
});

});





//WORKING creates a new quote  +++++++++++++++  working
// router.post('/api/quotes', function postQ(req,res){
//         res.json("JSON req.body._id:   "+ req.body._id);
//   var postQ = new db.Quote
//     ({
    
//     quote: req.body.quote,
//     author: req.body.author
//       });
      
//     postQ.save(function(err, q){
//           res.json(q);
//   });
// });



module.exports = router;