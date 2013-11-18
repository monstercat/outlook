var mongoose = require('mongoose');
var giftCodeSchema = new mongoose.giftCode({
  code: String,
  used: boolean
});

var giftCode = mongoose.model('gift', giftCodeSchema);
module.exports = giftCode
