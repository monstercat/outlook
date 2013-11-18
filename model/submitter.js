var mongoose = require('mongoose');
var submitterSchema = new mongoose.Schema({
  email: String,
  ItuneNo: String,
  friendEmail: String,
  friendName: String
});

var submitter = mongoose.model('submitter', submitterSchema);
module.exports = submitter
