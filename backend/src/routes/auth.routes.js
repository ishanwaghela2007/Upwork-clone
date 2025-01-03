const express = require('express');
const { body } = require('express-validator');
const authController = require('../controllers/auth.controller');

const router = express.Router();

router.post('/register', [
  body('email').isEmail(),
  body('password').isLength({ min: 6 }),
  body('name').notEmpty(),
  body('role').isIn(['client', 'freelancer'])
], authController.register);

router.post('/login', [
  body('email').isEmail(),
  body('password').exists()
], authController.login);

router.post('/logout',authController.logout);
module.exports = router;