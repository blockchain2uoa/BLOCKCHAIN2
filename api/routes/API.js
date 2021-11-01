var express = require('express');
var router = express.Router();
var shajs = require('sha.js')
const MongoClient = require('mongodb').MongoClient;

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

main()
    .then()
    .catch(console.error);
    // .finally(() => client.close());

async function insert(hashedPDF) {
  const pdfInDatabase = await collection.find({ hash: hashedPDF.hash }).toArray();
  if(pdfInDatabase.length > 0){
    return "Bad";
  } else {
    const insertResult = await collection.insertOne(hashedPDF)
    console.log('Inserted PDF =>', insertResult);
    return "Good";
  }
}

async function find(hashedPDF) {
  const pdfInDatabase = await collection.find({ hash: hashedPDF }).toArray();
  if(pdfInDatabase.length > 0){
    console.log('Found PDF =>', pdfInDatabase);
    return pdfInDatabase[0];
  } else {
    return "Bad";
  }
}

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//Upload route
router.post('/upload', async function(req,res, next) {
    var hashedPDF = new shajs.sha256().update(req.body.pdfFile).digest('hex');
    var hashInfo = {
      hash: hashedPDF,
      uploadTime: Date().toLocaleString()
    };
    if(await insert(hashInfo) == "Good"){
      res.json(hashInfo);
    } else {
      res.status(409).send({
        errorMessage: "The PDF hash already exists in the database!"
      });
    }
});

//Verify route
router.post('/verify', async function(req,res, next) {
  var hashedPDF = new shajs.sha256().update(req.body.pdfFile).digest('hex');

  const response = await find(hashedPDF);

  if(response != "Bad"){
    res.json(response);
  } else {
    res.status(404).send({
      errorMessage: "The PDF hash does not exsist in the database!"
    });
  }
});

// Login
router.post('/login', (req, res) => {
  res.send({
    token: 'test123'
  });
});

// DYNAMIC ROUTE FOR VERIFICATION
/*
router.get('/verify', async function(req,res, next) {
  var hashedPDF = new shajs.sha256().update(req.body.pdfFile).digest('hex');

  const response = await find(hashedPDF);

  if(response != "Bad"){
    res.json(response);
  } else {
    res.status(404).send({
      errorMessage: "The PDF hash does not exsist in the database!"
    });
  }
});
*/


module.exports = router;