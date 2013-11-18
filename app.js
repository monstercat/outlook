var mongoose = require('mongoose');
mongoose.connect('localhost', 'lookout');
var path = require('path');

var submitter = require('./model/submitter');

var express = require('express')
  , cors = require('cors')
  , app = express();

app.configure(function(){
  app.use(express.static(path.join(__dirname, "public")));
  app.use(cors());
  app.use(app.router);
  app.use(express.bodyParser());
});

app.post('/gift', function(req, res){
  console.log(req)
  console.log(req.body)
  console.log('get new request test 123');
});

app.listen(8000, function(){
  console.log('CORS-enabled web server listening on port 80');
});

