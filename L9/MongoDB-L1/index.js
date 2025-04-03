// Using Node.js `require()`
const mongoose = require('mongoose');
// Using ES6 imports

mongoose.connect('mongodb://127.0.0.1:27017/FULL-STACK-CLASS')
    .then(()=>{console.log('DB conected')})
    .catch(()=>{console.log('DB not conected')});

const users = new mongoose.Schema({
    name:String,
    email:String,
    age:Number
});

const User = mongoose.model('User',users);

// CREATE

// User.create({
//     name:'ajay',
//     email:'ajay@gmail.com',
//     age:36
// }).then(()=>{console.log('documnet Created!')})

// READ

// User.find({name:'ajay'})
//     .then((data)=>{console.log(data)});

// User.findOne({age:36})
//    .then((data)=>{console.log(data)});                  // show only one first for prticular condition 

//UPDATE

// User.updateOne({name:'ajay'},{email:'ajay@yahoo.com'})
//     .then((data)=>{console.log(data)});

// User.updateMany({},{age:70})
//     .then((data)=>{console.log(data)});

// User.deleteMany({})
//     .then((data)=>{console.log(data)})