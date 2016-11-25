var mongoose = require('mongoose');
var userSchema = mongoose.Schema({
    username:String,
    hashed_password:String,
    email:String,
    age:Number
});
//定义User模块
var User = mongoose.module('User',userSchema);
module.exports = User;