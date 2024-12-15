const { getFeedProjects, getRecommendedProjectsForUser, getTrendingSkillsList } = require('../services/feed.service');
const { validateUserRole } = require('../utils/validation');
const { AppError } = require('../utils/error-handler');

exports.getPersonalizedFeed = async (req, res, next) => {
  try {
    const projects = await getFeedProjects(req.user);
    
    res.json({
      status: 'success',
      data: { projects }
    });
  } catch (error) {
    next(error);
  }
};

exports.getRecommendedProjects = async (req, res, next) => {
  try {
    validateUserRole(req.user, ['freelancer']);
    
    const projects = await getRecommendedProjectsForUser(req.user);
    
    res.json({
      status: 'success',
      data: { projects }
    });
  } catch (error) {
    next(error);
  }
};

exports.getTrendingSkills = async (req, res, next) => {
  try {
    const skills = await getTrendingSkillsList();
    
    res.json({
      status: 'success',
      data: { skills }
    });
  } catch (error) {
    next(error);
  }
};