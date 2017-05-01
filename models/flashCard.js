var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FlashCardSchema = new Schema({
	type:String,
	question: String,
	answer: String
});

var FlashCard = mongoose.model('FlashCard', FlashCardSchema);

module.exports = FlashCard;
console.log(FlashCard+" exported");

