//to install ejs  npm install ejs

const express=require('express');
const app=express();
const PORT=5000;

const path=require('path');

app.set('view engine','ejs');

app.use(express.static(path.join(__dirname,'public')))

app.get('/',(req,res)=>{
    res.send('working fine')
})

// app.get('/about',(req,res)=>{
//     res.send('this is about page')
// })

app.get('/about',(req,res)=>{
    res.render('about')
})

app.get('/login',(req,res)=>{
    res.render('login')
})

let todos=['gaming','coding','full stack','mathematics']
app.get('/todos',(req,res)=>{
    res.render('todos',{todos})
})

app.get('/*',(req,res)=>{
    res.send('404 page not found')
})

app.listen(PORT,()=>{
    console.log('server run on Port ',PORT);
})