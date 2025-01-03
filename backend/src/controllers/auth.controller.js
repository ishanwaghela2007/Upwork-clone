const User = require('../models/user.model');
const { generateToken } = require('../config/jwt.config');
const { validateRequest } = require('../utils/validation');
const { AppError } = require('../utils/error-handler');
const BlacklistToken = require('../models/blacklistToken.model'); // Assuming this is the correct path

exports.register = async (req, res, next) => {
  try {
    validateRequest(req);

    const { email, password, name, role } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      throw new AppError('User already exists', 400);
    }

    const user = await User.create({
      email,
      password,
      name,
      role
    });

    const token = generateToken(user._id);
    
    res.status(201).json({
      status: 'success',
      token,
      data: {
        user: {
          id: user._id,
          email: user.email,
          name: user.name,
          role: user.role
        }
      }
    });
  } catch (error) {
    next(error);
  }
};

exports.login = async (req, res, next) => {
  try {
    validateRequest(req);
    
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select('+password');
    if (!user || !(await user.comparePassword(password))) {
      throw new AppError('Invalid credentials', 401);
    }

    const token = generateToken(user._id);

    res.json({
      status: 'success',
      token,
      data: {
        user: {
          id: user._id,
          email: user.email,
          name: user.name,
          role: user.role
        }
      }
    });
  } catch (error) {
    next(error);
  }
};
exports.logout = async (req, res, next) => {
  try {
    // Check if the token is present in the request headers
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      throw new AppError('No token provided', 401);
    }

    // Add the token to the blacklist
    await BlacklistToken.create({ token });

    res.status(200).json({
      status: 'success',
      message: 'Logged out successfully'
    });
  } catch (error) {
    next(error);
  }
};