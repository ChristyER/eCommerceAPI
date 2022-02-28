// Creates GET and PUT endpoints to get and update user data
// POST endpoint to create a new user is covered via 'auth'
// Depends on UserService, which checks if a user already exists and what to do (if not)

const express = require('express');
const router = express.Router();
const UserService = require('../services/UserService');

const UserServiceInstance = new UserService();

module.exports = (app) => {

  app.use('/users', router);

  router.get('/:userId', async (req, res, next) => {

    try {
      const { userId } = req.params;
    
      const response = await UserServiceInstance.get({ id: userId });
      res.status(200).send(response);
    } catch(err) {
      next(err);
    }
  });

  router.put('/:userId', async (req, res, next) => {
    try {
      const { userId } = req.params;
      const data = req.body;

      const response = await UserServiceInstance.update({ id: userId, ...data });
      res.status(200).send(response);
    } catch(err) {
      next(err);
    }
  });

}