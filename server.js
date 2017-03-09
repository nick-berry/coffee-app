var express = require('express');
var path = require('path');
var app = express();

app.use('/dist', express.static('dist'));

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000, function(req, res) {
  console.log('app listening on port 3000...');
});
