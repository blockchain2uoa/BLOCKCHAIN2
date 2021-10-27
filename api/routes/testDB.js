const express = require("express");
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;

// Variable to be sent to Frontend with Database status
let databaseConnection = "Waiting for Database response...";

router.get("/", function(req, res, next) {
    res.send(databaseConnection);
});

// Connection URL
const url = 'mongodb://localhost/';
const client = new MongoClient(url);

// Database Name
const dbName = 'blockchain2';
var db, collection;

async function main() {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    db = client.db(dbName)
    collection = db.collection('pdfs')
  
    // the following code examples can be pasted here...
}

// main()
//     .then(async ()=>{
//         // await find(); 
//     })
//     .catch(console.error)
//     .finally(() => client.close());

async function insert() {
    const insertResult = await collection.insertOne({hash: "123456789abcdefghi"})
    console.log('Inserted documents =>', insertResult);
    return 'done.';
}

async function find() {
    const findResult = await collection.find({}).toArray();
    console.log('Found documents =>', findResult);
    return 'done.';
}

module.exports = router;