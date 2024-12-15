const { validationResult } = require('express-validator');
const { AppError } = require('./error-handler');

exports.validateRequest = (req) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw new AppError('Validation failed', 400);
  }
};

exports.validateUserRole = (user, allowedRoles) => {
  if (!allowedRoles.includes(user.role)) {
    throw new AppError(`This feature is only available for ${allowedRoles.join(', ')}`, 403);
  }
};