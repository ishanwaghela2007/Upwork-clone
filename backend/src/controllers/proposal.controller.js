const Proposal = require('../models/proposal.model');
const Project = require('../models/project.model');
const { AppError } = require('../utils/error-handler');
const { validateRequest } = require('../utils/validation');

exports.createProposal = async (req, res, next) => {
  try {
    validateRequest(req);

    const project = await Project.findById(req.body.project);
    if (!project) {
      throw new AppError('Project not found', 404);
    }

    if (project.status !== 'open') {
      throw new AppError('Project is not open for proposals', 400);
    }

    const existingProposal = await Proposal.findOne({
      project: req.body.project,
      freelancer: req.user.id
    });

    if (existingProposal) {
      throw new AppError('You have already submitted a proposal for this project', 400);
    }

    const proposal = new Proposal({
      ...req.body,
      freelancer: req.user.id
    });

    await proposal.save();
    
    res.status(201).json({
      status: 'success',
      data: { proposal }
    });
  } catch (error) {
    next(error);
  }
};

exports.getProposalsByProject = async (req, res, next) => {
  try {
    const project = await Project.findById(req.params.projectId);
    if (!project) {
      throw new AppError('Project not found', 404);
    }

    // Only allow client who posted the project or the freelancer who submitted the proposal to view
    if (project.client.toString() !== req.user.id && req.user.role !== 'freelancer') {
      throw new AppError('Not authorized to view these proposals', 403);
    }

    const proposals = await Proposal.find({ project: req.params.projectId })
      .populate('freelancer', 'name email skills hourlyRate')
      .sort({ createdAt: -1 });

    res.json({
      status: 'success',
      data: { proposals }
    });
  } catch (error) {
    next(error);
  }
};

exports.updateProposalStatus = async (req, res, next) => {
  try {
    validateRequest(req);

    const proposal = await Proposal.findById(req.params.id)
      .populate('project');

    if (!proposal) {
      throw new AppError('Proposal not found', 404);
    }

    // Only project client can update proposal status
    if (proposal.project.client.toString() !== req.user.id) {
      throw new AppError('Not authorized to update this proposal', 403);
    }

    proposal.status = req.body.status;
    await proposal.save();

    if (req.body.status === 'accepted') {
      // Update project status when proposal is accepted
      await Project.findByIdAndUpdate(proposal.project._id, { status: 'in-progress' });
    }

    res.json({
      status: 'success',
      data: { proposal }
    });
  } catch (error) {
    next(error);
  }
};