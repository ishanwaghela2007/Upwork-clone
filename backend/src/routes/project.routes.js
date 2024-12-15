const express = require('express');
const { body } = require('express-validator');
const projectController = require('../controllers/project.controller');
const auth = require('../middleware/auth.middleware');

const router = express.Router();

router.post('/', [
  auth,
  body('title').notEmpty(),
  body('description').notEmpty(),
  body('budget').isNumeric()
], projectController.createProject);

router.get('/', projectController.getProjects);
router.get('/:id', projectController.getProjectById);

module.exports = router;