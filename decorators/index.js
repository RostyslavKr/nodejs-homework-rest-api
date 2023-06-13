const validateBody = require('./validateBody');
const validateStatusBody = require('./validateStatusBody');
const ctrlWrapper = require('./ctrlWrapper');
const handleMongooseError = require('./handleMongooseError');
module.exports = {
  validateBody,
  validateStatusBody,
  ctrlWrapper,
  handleMongooseError,
};
