var mongoose = require('mongoose');
var giftCodeSchema = new mongoose.Schema({
  code: String,
  used: Boolean
});

var giftCode = mongoose.model('gift', giftCodeSchema);
module.exports = giftCode
