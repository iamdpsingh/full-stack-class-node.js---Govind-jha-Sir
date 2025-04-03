const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const p = path.join(__dirname, '../public');
console.log(p)
app.use(express.static(p))

app.get('/', (req, res) => {
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})



// const EventEmitter = require('events')
// let count = 0;
// const event = new EventEmitter();
// event.on('Countapi', (status,msg) => {
//     count++;
//     console.log(`Api is called and status code is ${status} with message ${msg} and count is ${count}`);
// })
// app.get('/about', (req, res) => {
//     res.send('Api Called from about');
//     event.emit('Countapi',200,'OK');
// })