const { handleError } = require('../utils/error-handler');

module.exports = (err, req, res, next) => {
  handleError(err, res);
};