var mongoose = require('mongoose');
mongoose.connect('localhost', 'lookout');
var kue = require('kue');
jobs = kue.createQueue();

var path = require('path');
var Submitter = require('./model/submitter');
var giftCode = require('./model/giftCode');
var express = require('express')
  , cors = require('cors')
  , app = express();

var sendGift = function(sender, senderEmail, receiver, receiverEmail){
  var html = '<div> test email<div>';
  var to = receiverEmail;
  var from = 'connect@monstercat.com';
  var subject = 'test email for gift';
  time = 10000;

  var job = jobs.create('outlook gift email', {
      to : to
    , from: from 
    , subject: subject
    , html: html
  });

  job.on("complete", function () {
    console.log('email send successfull');
  });

  job.on("failed", function (err) {
    console.log('email send err');
  });
  
  job.delay(time);
  job.attempts(2);
  job.save();
  jobs.promote();
}

var validateItuneCode = function(itunesNo, cb){

  //check string lenght
  if(itunesNo.length != 12){
    return cb('invalid Itunes number: length');
  }

  //check if it is all numbers
  var num = Number(itunesNo);
  if(!num){
    return cb('invalid Itunes number: not a number');
  }

  //check if it is integer
  var intRegex = /^\d+$/;
  if(!intRegex.test(num)) {
    return cb('invalid Itunes number: not a integer');
  }

  //check for repeating number
  var repeatingRegex = /\b(\d)\1+\b/;
  if(repeatingRegex.test(num)){
    return cb('invalid Itunes number: repeating number')
  }

  Submitter.find({itunesNo: itunesNo}, function(err, docs){
    if(docs.length>0){ 
      return cb('duplicated Itunes number');
    }else{
      return cb(null);
    }
  }); 
}

app.configure(function(){
  app.use(express.static(path.join(__dirname, "public")));
  app.use(express.bodyParser());
  app.use(cors());
  app.use(app.router);
});

app.post('/gift', function(req, res){
  var name = req.body.name;
  var email = req.body.email;
  var itunesNo = req.body.itunesNo;
  var friendEmail = req.body.friendEmail;
  var friendName = req.body.friendName;

  validateItuneCode(itunesNo, function(err){
    if(err){
      console.log(err);
      return
    }

    var new_submitter =  new Submitter({
      name: name,
      email:email,
      itunesNo:itunesNo,
      friendEmail: friendEmail,
      friendName: friendName
     });

    new_submitter.save(function(err, doc){
      console.log('saved user');
      sendGift(name,email,friendName,friendEmail);
      return res
    });
  });
});

app.listen(8000, function(){
  console.log('CORS-enabled web server listening on port 80');
});

