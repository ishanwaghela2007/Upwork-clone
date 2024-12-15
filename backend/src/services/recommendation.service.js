const Project = require('../models/project.model');

exports.getProjectsBySkills = async (skills, limit = 5) => {
  return Project.find({
    status: 'open',
    skills: { $in: skills }
  })
    .populate('client', 'name')
    .sort({ createdAt: -1 })
    .limit(limit);
};

exports.getProjectsByBudgetRange = async (minBudget, maxBudget, limit = 5) => {
  return Project.find({
    status: 'open',
    budget: { $gte: minBudget, $lte: maxBudget }
  })
    .populate('client', 'name')
    .sort({ createdAt: -1 })
    .limit(limit);
};