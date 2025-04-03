// fs.writeFileSync('he.txt', 'Hello world');
// const http = require('http');


const fs = require('fs')
// fs.mkdirSync('test');
// fs.writeFileSync('test/he.txt','Hello world');
// fs.appendFileSync('test/he.txt','Welcome');
// const data = fs.readFileSync('test/he.txt','UTF-8');
// console.log(data);
// fs.renameSync('test/he.txt','test/my_score.txt');
// fs.rmdirSync('test');

// Asynchronus

// fs.mkdir('test', (err) => {
//     console.log('Directory created Successfully')
// })
// fs.writeFile('test/he.txt', 'Hello world', (err) => {
//     console.log('Data stored Successfully')
// })
// fs.readFile('test/he.txt', 'UTF-8', (err, data) => {
//     console.log(data)
// })
// console.log('After Data')

// const os = require('os');
// console.log(os.arch())
// console.log(`${os.freemem() / 1024 / 1024 / 1024}  `)
// console.log(`${os.totalmem() / 1024 / 1024 / 1024}`)
// console.log(os.hostname())
// console.log(os.machine())


// console.warn(connectdb());
// connectdb().then((res) => {
// console.warn(res.find().toArray());
//     res.find().toArray().then((data) => {
//         console.log(data)
//     })
// })

// const mongo = require('./mongoConfig')
// const main = async () => {
//     const connection = await mongo();
//     const data = await connection.find().toArray();
//     console.log(data);

// }
// main()

// const http = require('http')
// http.createServer((req, res) => {
//     if (req.url === '/') {
//         res.end('Hello from Home Page')
//     }
//     else if (req.url === '/about') {
//         res.end('Hello From About')
//     }
//     else {
//         res.end('404 Page Not Found')
//     }
// }).listen(3000, '127.0.0.1', () => {
//     console.log('Listening on port 3000')
// });

// const http = require('http');
// const data = require('./data');
// http.createServer((req, res) => {
//     res.writeHead(200, { 'content-Type': 'application/json' });
//     res.write(JSON.stringify(data));
// }).listen(3000);
// fs.writeFileSync(process.argv[2],process.argv[3])
// console.log(process.argv[2])

const event = require('events');
const http = require('http')
http.createServer((req, res) => {
    res.end("Home Page")
    console.log("Listening on port 3000")
}).listen(3000)

const eventEmitter = new event.EventEmitter;
eventEmitter.on('Hello', (req,res) => {
    // console.log('Hello Message')
    res.end('Hello')
})
eventEmitter.on('Hello1', (req,res) => {
    // console.log('Hello1 Message')
    res.end('Hello1')
})
eventEmitter.on('Hello2', (req,res) => {
    // console.log('Hello2 Message')
    res.end('Hello2')
})
eventEmitter.emit('Hello')
// eventEmitter.emit('Hello1')
// eventEmitter.emit('Hello2')
