const { AppError } = require('../utils/error-handler');
const { verifyToken, extractToken } = require('../config/jwt.config');
const User = require('../models/user.model');

module.exports = async (req, res, next) => {
  try {
    const token = extractToken(req.header('Authorization'));
    const decoded = verifyToken(token);
    
    const user = await User.findById(decoded.userId).select('-password');
    if (!user) {
      throw new AppError('User not found', 401);
    }

    req.user = user;
    next();
  } catch (error) {
    next(new AppError('Authentication required', 401));
  }
};