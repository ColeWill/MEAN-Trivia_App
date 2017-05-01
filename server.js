var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;


//serves up those views
// app.use(express.static(__dirname+'/public'));

app.get('/', function(req,res){
	res.send('you are home');
});

var routes = require('./routes');
app.use(routes);


app.listen(port, function(){
	console.log('serving on localhost://', port );
});