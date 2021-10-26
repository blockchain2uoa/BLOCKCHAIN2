var express = require('express');
var router = express.Router();
var shajs = require('sha.js')

//const multer = require( 'multer');
//const uuid = require('uuid').v4;

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//link to html 
// app.use(express.static('public'));

//upload route
router.post('/upload', function(req,res, next) {
    var hashedPDF = new shajs.sha256().update(req.body.pdfFile).digest('hex');
    var hashInfo = {
      hash: hashedPDF,
    };
    res.json(hashInfo);
    // res.json({ status: 'GOOD', uploaded: req.files.length});
    //blockchin codes here
    //then....

});

module.exports = router;