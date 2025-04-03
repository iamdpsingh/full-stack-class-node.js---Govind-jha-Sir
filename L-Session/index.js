// session used for authentication
// also used to save data in browser
const express=require('express');
const app=express();
const session = require('express-session');



app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
//   cookie: { secure: true }
// if cookie is set to true cannot update the session 
}));

app.get('/',(req,res)=>{
    res.send(req.session);
    // originalMaxAge is used in miili second also it is used to give a time at which authorization ends
});

app.get('/setsession',(req,res)=>{
    req.session.name="Rahul";
    req.session.mode="dark";
    res.send("session set");
})

app.listen(PORT, () => {
    console.log('Server is running on port',PORT);
});