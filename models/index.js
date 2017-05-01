var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/flashCards');

module.exports.FlashCard = require('./flashCard.js');