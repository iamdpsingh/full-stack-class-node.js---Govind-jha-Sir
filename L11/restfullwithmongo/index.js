const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Product = require('./model/product')
var methodOverride = require('method-override');

const PORT=3300;

app.set('view engine','ejs');

app.use(express.urlencoded({extended:true}))
app.use(methodOverride('_method'))

mongoose.connect('mongodb://127.0.0.1:27017/product-info')
    .then(()=>{console.log('DB conected')})
    .catch(()=>{console.log('DB not conected')})


app.get('/products',async (req,res)=>{
    const products = await Product.find({});
    res.render('product',{products})
})



app.listen(PORT,()=>{
    console.log('server run at port',PORT);
})