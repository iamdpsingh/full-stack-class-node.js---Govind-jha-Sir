const { MongoClient } = require('mongodb');
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);
const database = 'triphive';

async function connectdb() {
    let result = await client.connect();
    let db = result.db(database);
    let collection = db.collection('hotels');
    return collection;
    // let response = await collection.find({ price: 70 }).toArray();
    // console.log(response);
}

module.exports = connectdb;