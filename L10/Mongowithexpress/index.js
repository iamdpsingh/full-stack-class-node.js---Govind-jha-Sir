const express = require('express');
const app = express();
const mongoose = require('mongoose');
const User = require('./model/User');
var methodOverride = require('method-override');

const PORT=3300

app.set('view engine','ejs');
app.use(express.urlencoded({extended:true}))
app.use(methodOverride('_method'))

mongoose.connect('mongodb://127.0.0.1:27017/User-express')
    .then(()=>{console.log('DB conected')})
    .catch(()=>{console.log('DB not conected')})

    app.get('/', (req, res) => {
        res.send('HOME PAGE');
    });
    
    app.get('/users', async (req, res) => {
        const users = await User.find();
        res.render('user', { Users: users });
    });
    
    app.get('/user/new', (req, res) => {
        res.render('new');
    });
    
    app.post('/users', async (req, res) => {
        const { username, password, email, city } = req.body;
        const newUser = new User({ username, password, email, city });
        await newUser.save();
        res.redirect('/users');
    });
    
    app.get('/users/:id', async (req, res) => {
        const user = await User.findById(req.params.id);
        res.render('show', { user });
    });
    
    app.get('/users/:id/edit', async (req, res) => {
        const user = await User.findById(req.params.id);
        res.render('edit', { user });
    });
    
    app.patch('/users/:id', async (req, res) => {
        const { username, password, email, city } = req.body;
        await User.findByIdAndUpdate(req.params.id, { username, password, email, city });
        res.redirect('/users');
    });
    
    app.delete('/users/:id', async (req, res) => {
        await User.findByIdAndDelete(req.params.id);
        res.redirect('/users');
    });

app.listen(PORT,()=>{
    console.log('server run at port',PORT);
})