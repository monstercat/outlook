var mongoose = require('mongoose');
mongoose.connect('localhost', 'lookout')

var submitter = require('/model/submitter')

var express = require('express')
  , cors = require('cors')
  , app = express();

app.configure(function(){
  app.use(cors());
  app.use(app.router);
  app.use(express.bodyParser());
  app.use(express.static(path.join(__dirname, "public")));
});

app.post('/gift', function(req, res, next){
  console.log(req)
  console.log(req.body)
  console.log('get new request');
});

app.listen(8000, function(){
  console.log('CORS-enabled web server listening on port 80');
});

