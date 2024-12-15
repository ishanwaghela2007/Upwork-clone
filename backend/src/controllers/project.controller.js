const Project = require('../models/project.model');
const { AppError } = require('../utils/error-handler');
const { validateRequest } = require('../utils/validation');

exports.createProject = async (req, res, next) => {
  try {
    validateRequest(req);

    const project = new Project({
      ...req.body,
      client: req.user.id
    });

    await project.save();
    
    res.status(201).json({
      status: 'success',
      data: { project }
    });
  } catch (error) {
    next(error);
  }
};

exports.getProjects = async (req, res, next) => {
  try {
    const projects = await Project.find()
      .populate('client', 'name email')
      .sort({ createdAt: -1 });

    res.json({
      status: 'success',
      data: { projects }
    });
  } catch (error) {
    next(error);
  }
};

exports.getProjectById = async (req, res, next) => {
  try {
    const project = await Project.findById(req.params.id)
      .populate('client', 'name email');
    
    if (!project) {
      throw new AppError('Project not found', 404);
    }

    res.json({
      status: 'success',
      data: { project }
    });
  } catch (error) {
    next(error);
  }
};