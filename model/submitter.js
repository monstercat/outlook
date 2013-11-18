var mongoose = require('mongoose');
var submitterSchema = new mongoose.Schema({
  name: String,
  email: String,
  itunesNo: String,
  friendName: String,
  friendEmail: String
});

var submitter = mongoose.model('submitter', submitterSchema);
module.exports = submitter
