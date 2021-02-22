const apiV1 = require('express').Router();

apiV1.get('/', function(req, res) {
  res.send('Hello from APIv1 root route.');
});

apiV1.get('/users', function(req, res) {
  res.send('List of APIv1 users.');
});

module.exports = apiV1;
