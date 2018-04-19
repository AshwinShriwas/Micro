
/*var express = require('express');
var app = express();

app.get('/SayHello', function (req, res) {
    res.send('Hello World!')
  })
  
  app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
  })*/

var seneca = require('seneca')();

seneca.use( './process.js' );

seneca.act( { role: 'process', cmd: 'sum', numbers: [ 1, 2] }, function ( err, result ) {
  console.log( result );
} )