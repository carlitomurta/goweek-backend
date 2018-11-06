const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect(
  'mongodb://goweek:goweek123@ds217360.mlab.com:17360/goweekbackend',
  { useNewUrlParser: true }
);

app.use(require('./routes'));

app.listen(3000, () => {
  console.log('Server started on port: 3000');
});
