const express = require('express');
const app = express();
const router = require('./router');

app.use(express.json());
app.use('/', router);

function startServer(port) {
  app.listen(port, () => {
    console.log(`Server started on port ${port}`);
  });
}

module.exports = { startServer };
