//Dependencies
var bodyParser = require('body-parser');
var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var mongoose = require('mongoose');
var path = require('path');
var app = express();

//Middleware config


app.use(express.static(path.join(__dirname + '/client')));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({entended: true}));
app.use(bodyParser.json());



//Mongo

var db 

MongoClient.connect('mongodb://localhost:27017/calls', function(err, database) {
  if (err) return console.log(err)
  db = database
  //Connect to server
  app.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
    console.log("Server Running");
  })
})




//Routes

//Index
app.get ('/', function(req, res) {
  db.collection('calls').find().toArray(function(err, result) {
    if(err) return console.log('Mongo is not working')

    res.render('../views/index.ejs', {calls: result})
  })
})

//New Call
app.get ('/newCall', function(req, res) {
  res.render('../views/newCall');
})

app.post('/newCall', function(req, res) {
  db.collection('calls').save(req.body, function(err, result) {
    if (err) return console.log(err)
    
    console.log('Saved to DB!')
    res.redirect('/')
  })
});


//Search Calls
app.get ('/searchCalls', function(req, res) {
  res.render('../views/searchCalls');
});



