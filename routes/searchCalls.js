var express = require('express');  
var router = express.Router();

app.get ('/searchCalls', function(req, res) {
  res.render('../views/searchCalls');
});

module.exports = router;  