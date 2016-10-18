//Dependencies
var bodyParser = require('body-parser');
var express = require('express');
var MongoClient = require('mongodb').MongoClient
var app = express();


//Middleware config

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({entended: true}))

//Mongo

var db 

MongoClient.connect('mongodb://localhost:27017/calldb', function(err, database) {
  if (err) return console.log(err)
  db = database
//Connect to server
  app.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
    console.log("Server Running");
});
})


//Index
app.get ('/', function(req, res) {
  res.render('../views/index');
});

//New Call
app.get ('/newCall', function(req, res) {
  res.render('../views/newCall');
})

app.post('/newCall', function(req, res) {
  db.collection('calldb').save(req.body, function(err, results) {
    if (err) return console.log(err)
    
    console.log('Saved to DB!')
    res.redirect('/')
  })
});


//Search Calls
app.get ('/searchCalls', function(req, res) {
  res.render('../views/searchCalls');
});



