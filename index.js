const express = require('express');
const app = express();

const loaders = require('./loaders');

const { PORT } = require('./config');

async function startServer() {

  // Initialise application loaders
  loaders(app);

  // Added line to check port
  app.get('/', (request, response) => {
    response.json({info: 'Running eCommerceAPI'})
})

  // Start server
  app.listen(PORT, () => {
    console.log(`Server listening on PORT ${PORT}`);
  })
}

startServer();