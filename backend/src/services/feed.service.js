const Project = require('../models/project.model');
const { calculateBudgetRange } = require('../utils/project.utils');

exports.getFeedProjects = async (user) => {
  const query = { status: 'open' };
  
  if (user.role === 'freelancer' && user.skills?.length > 0) {
    query.skills = { $in: user.skills };
  }

  return Project.find(query)
    .populate('client', 'name')
    .sort({ createdAt: -1 })
    .limit(10);
};

exports.getRecommendedProjectsForUser = async (user) => {
  const { minBudget, maxBudget } = calculateBudgetRange(user.hourlyRate);
  
  return Project.find({
    status: 'open',
    budget: { $gte: minBudget, $lte: maxBudget },
    skills: { $in: user.skills || [] }
  })
    .populate('client', 'name')
    .sort({ createdAt: -1 })
    .limit(5);
};

exports.getTrendingSkillsList = async () => {
  return Project.aggregate([
    { $match: { status: 'open' } },
    { $unwind: '$skills' },
    { $group: { _id: '$skills', count: { $sum: 1 } } },
    { $sort: { count: -1 } },
    { $limit: 10 }
  ]);
};