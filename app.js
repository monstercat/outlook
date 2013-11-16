
var express = require('express')
  , cors = require('cors')
  , app = express();

app.use(cors());
app.use(app.router);

app.post('/gift', function(req, res, next){
  console.log('get request');
});

app.listen(8000, function(){
  console.log('CORS-enabled web server listening on port 80');
});

