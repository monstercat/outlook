var mongoose = require('mongoose');
mongoose.connect('localhost', 'lookout');
var kue = require('kue')
jobs = kue.createQueue();

var path = require('path');
var submitter = require('./model/submitter');
var giftCode = require('./model/giftCode');
var express = require('express')
  , cors = require('cors')
  , app = express();

var sendGift = function(sender, senderEmail, receivera, receiverEmail){
  var html = '';
  var to = '';
  var from = '';
  time = 60*60*24;

  jobs.create('outlook gift email', {
     to : to
    , from: from 
    , subject: subject
    , html: html
  }).delay(time).save();
}

var validateItuneCode = function(receiptNum, cb){
  cb(null);
}

app.configure(function(){
  app.use(express.static(path.join(__dirname, "public")));
  app.use(express.bodyParser());
  app.use(cors());
  app.use(app.router);
});

app.post('/gift', function(req, res){
  console.log(req)
  console.log(req.body)
  console.log('get new request');
  validateItuneCode(req.body.ituneCode, function(err){
    var new_submitter =  new submitter({
      name: name,
      email:email,
      ituneNo:itueNo,
      friendEmail: friendEmail,
      friendName: friendName
     });

    new_submitter.save(function(err, doc){
      sendGift(name,email,friendEmai,friendName);
    });
  });
});

app.listen(8000, function(){
  console.log('CORS-enabled web server listening on port 80');
});

