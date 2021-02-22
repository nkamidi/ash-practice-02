const apiV2 = require('express').Router();

apiV2.get('/', function(req, res) {
  res.send('Hello from APIv2 root route.');
});

apiV2.get('/users', function(req, res) {
  res.send('List of APIv2 users.');
});

module.exports = apiV2;
