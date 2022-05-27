const mongoose = require('mongoose')

var otpSchema = new mongoose.Schema({
    email:String,
    code:String,
    expireIn:Number
},{
    timestamps:true
})

let otp = mongoose.model('OTP',otpSchema);
module.exports = otp;