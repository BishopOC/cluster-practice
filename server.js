const express = require('express');
const server = express();
const bodyparser = require('body-parser');
const port = process.env.PORT || 8080;
const mongoose = require('mongoose');

server.use(express.static(__dirname + '/public'));
server.use(bodyparser.json());
server.use(bodyparser.urlencoded({extended: true}));

server.get('/', (req, res) => {
  res.sendFile('index.html', {root: __dirname + '/public/html'});
});

server.listen(port, () => {
  console.log('now listening on port ', port);
});
