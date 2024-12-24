const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || '12343hj23fhgg';
const JWT_EXPIRES_IN = '24h';

exports.generateToken = (userId) => {
  return jwt.sign({ userId }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
};

exports.verifyToken = (token) => {
  return jwt.verify(token, JWT_SECRET);
};

exports.extractToken = (authHeader) => {
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    throw new Error('Invalid authorization header');
  }
  return authHeader.replace('Bearer ', '');
};