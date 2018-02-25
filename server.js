// Initializing express, paths, and bodyParser npms
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

// Create the Port
var PORT = process.env.PORT || 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

//require the html files to display the website and pass the app argument
require('./public/home.html')(app);
require('./public/survey.html')(app);

//Start Server for Listening
app.listen(PORT, function(){
  console.log('App is listening on PORT ' + PORT);
});
