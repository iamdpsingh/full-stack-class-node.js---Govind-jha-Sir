const express = require('express');
const app = express();

app.set('view engine','ejs');

const PORT=4000;

const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/product-info-2')
  .then(() => console.log('DB Connected!'))
  .catch(()=>{console.log('DB not conected')})


const Product = require('./model/Product');

app.use(express.urlencoded({extended:true}))

app.get('/products',async (req,res)=>{
    const products = await Product.find({});
    res.render('product',{products})
})

app.get('/product/new',(req,res)=>{
  res.render('new')
})

app.post('/products',async (req,res)=>{
   const {name,image,price,desc} = req.body;
   await Product.create({name,image,price,desc})
   res.redirect('/products')
})

app.listen(PORT,()=>{
    console.log('server run at port',PORT)
})