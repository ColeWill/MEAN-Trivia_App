var express = require ('express');
var router = express.Router();
var bodyParser = require('body-parser');
var db = require('./models');

router.get ('/api/flashcards', function flashCards_index(req,res){
	db.FlashCard.find({}, function (err, dbCards){
		if (err){
			console.log(err);
		}
		res.json(dbCards);
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