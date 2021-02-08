const express = require('express');
const calculator = require('./modules/calculator')

//const calculator = require('./public/scripts/calculator');

// create our app
const app = express();

const PORT = 5000;

// INCANTATION
app.use(express.static('server/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//LISTENER
// listening for http request
app.listen(PORT, function () {
  console.log('app listener', PORT);
});

//GET ENDPOINT
app.get('/module/calculator', (req, res) {
  console.log('GET request for quotes');
  res.send(calculator.clientCalculator());
});

//POST ENDPOINT
