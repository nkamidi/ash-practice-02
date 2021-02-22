const express = require('express');
// const app = module.exports = express();

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'

const server = express();
const routes = require('./routes');

/*
app.use('/api/v1', require('./controllers/api_v1'));
app.use('/api/v2', require('./controllers/api_v2'));
*/

server.use(require('./routes'));

server.listen(port, (err) => {
  if (err) throw err;
  console.log(`> Ready on http://localhost:${port}`);
})
