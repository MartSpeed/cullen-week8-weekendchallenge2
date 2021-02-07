const express = require('express');

const calculator = require('./public/scripts/calculator');

const app = express();

const PORT = 5000;

// INCANTATION
app.use(express.static('server/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: trie }));

//LISTENER
app.listen(PORT, function () {
  console.log('app listener', PORT);
});

//GET ENDPOINT

//POST ENDPOINT
