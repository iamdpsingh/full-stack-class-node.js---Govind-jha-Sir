const mongoose = require('mongoose');

const user = new mongoose.Schema({
    username:String,
    password:String,
    email:String,
    city:String
})


module.exports = mongoose.model('User', user);