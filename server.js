const express = require('express');
const server = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const port = process.env.PORT || 8080;
const mongoURI = process.env.MONGOURI || require('./secrets.js').MONGOURI;
const todoRouter = require('./routers/post.router.js');

server.use(express.static(__dirname + '/public'));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));

mongoose.connect(mongoURI);


server.get('/', (req, res) => {
  res.sendFile('index.html', {root: __dirname + '/public/html'});
});

server.use(todoRouter);

server.listen(port, () => {
  console.log('now listening on port ', port);
});
