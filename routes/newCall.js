var express = require('express');  
var router = express.Router();

app.get ('/newCall', function(req, res) {
  res.render('../views/newCall');
});

module.exports = router;  