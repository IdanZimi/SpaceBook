const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const postApi = require('./api.js')
const SERVER_PORT = 8080;

mongoose.connect('mongodb://localhost/spacebookDB', function() {
  console.log("DB connection established!!!");
})

// const Post = require('./models/postModel');

const app = express();
app.use(express.static('public'));
app.use(express.static('node_modules'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(postApi);

// You will need to create 5 server routes
// These will define your API:

// 1) to handle getting all posts and their comments
// 2) to handle adding a post
// 3) to handle deleting a post
// 4) to handle adding a comment to a post
// 5) to handle deleting a comment from a post

app.listen(SERVER_PORT, () => {
  console.log("Server started on port " + SERVER_PORT);
});
