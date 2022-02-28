const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
// const dotenv required to make the server run:
const dotenv = require('dotenv').config();
const { SESSION_SECRET } = require('../config');

module.exports = (app) => {

  app.use(cors()); // cross origin resource sharing to all origins by default

  app.use(bodyParser.json()); // transforming raw string of req.body into json

  app.use(bodyParser.urlencoded({ extended: true })); // parsing urlencoded bodies

  /* 
  When running an Express app behind a reverse proxy, some of the Express APIs may return different values than expected.
  In order to adjust for this, the trust proxy application setting may be used to expose information provided by the reverse proxy in the Express APIs.
  The most common issue is express APIs that expose the client's IP address may instead show an internal IP address of the reverse proxy.
  When configuring the trust proxy setting, it is important to understand the exact setup of the reverse proxy.
  Since this setting will trust values provided in the request, it is important that the combination of the setting in Express matches how the reverse proxy operates.
  Type Number:
  Use the address that is at most n number of hops away from the Express application. 
  req.socket.remoteAddress is the first hop, and the rest are looked for in the X-Forwarded-For header from right to left.
  A value of 0 means that the first untrusted address would be req.socket.remoteAddress, i.e. there is no reverse proxy.
  When using this setting, it is important to ensure there are not multiple, different-length paths to the Express application;
  such that the client can be less than the configured number of hops away, otherwise it may be possible for the client to provide any value.
  */
  app.set('trust proxy', 1);

  // Creates a session
  app.use(
    session({  
      secret: SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
      cookie: {
        secure: false,
        maxAge: 60 * 60 * 24 * 365 // set to 1 year
      }
    })
  );

  return app;
}