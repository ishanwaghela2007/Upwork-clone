const express = require('express');
const feedController = require('../controllers/feed.controller');
const auth = require('../middleware/auth.middleware');
const { cache } = require('../middleware/cache.middleware');

const router = express.Router();

router.get('/personalized', 
  auth, 
  feedController.getPersonalizedFeed
);

router.get('/recommended', 
  auth, 
  feedController.getRecommendedProjects
);

router.get('/trending-skills', 
  auth, 
  cache(300), // Cache for 5 minutes
  feedController.getTrendingSkills
);

module.exports = router;