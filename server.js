
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;

app.use(function(req,res,next){
res.header('Access-Control-Allow-Origin',"*");
next();
});

app.use(bodyParser.urlencoded({extended:true}));//we use express to parse url query strings that come in as requests
app.use(bodyParser.json());

//serves up those views
app.use(express.static(__dirname +'/frontend/'));

app.get('/', function(req,res){
	  res.sendFile(__dirname +'/frontend/index.html');
});

var routes = require('./routes');
app.use(routes);


app.listen(port, function(){
	console.log('serving on localhost:3000');
});