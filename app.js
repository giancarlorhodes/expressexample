/* eslint-disable no-console */
// gets reference to the the express js library that you will see in the package.json file
const express = require('express');
// mongoose ORM library for MongoDb
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

if (process.env.DB_ENV === 'TEST') {
  console.log('connecting to bookAPI_TEST ...');
  mongoose.connect('mongodb://localhost/bookAPI_TEST');
} else {
  console.log('connecting to bookAPI ...');
  mongoose.connect('mongodb://localhost/bookAPI');
}
const port = process.env.PORT || 3000;
const Book = require('./models/bookModel');

const bookRouter = require('./routes/bookRouter')(Book);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', bookRouter);

app.get('/', (req, res) => {
  res.send('Welcome to my Nodemon API!');
});

app.server = app.listen(port, () => {
  console.log(`Running on port ${port}`);
});

module.exports = app;
