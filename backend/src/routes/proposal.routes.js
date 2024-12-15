const express = require('express');
const { body } = require('express-validator');
const proposalController = require('../controllers/proposal.controller');
const auth = require('../middleware/auth.middleware');

const router = express.Router();

router.post('/', [
  auth,
  body('project').notEmpty(),
  body('coverLetter').notEmpty(),
  body('bidAmount').isNumeric(),
  body('estimatedDuration').isNumeric()
], proposalController.createProposal);

router.get('/project/:projectId', auth, proposalController.getProposalsByProject);
router.patch('/:id/status', auth, proposalController.updateProposalStatus);

module.exports = router;