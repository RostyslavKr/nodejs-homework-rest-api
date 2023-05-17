const Joi = require('joi');

const contactAddSchema = Joi.object({
  name: Joi.string()
    .required()
    .messages({ 'any.required': 'missing required name field' }),
  email: Joi.string()
    .email()
    .required()
    .messages({ 'any.required': 'missing required email field' }),
  phone: Joi.string()
    .pattern(/^\(\d{3}\)\s\d{3}-\d{4}$/, 'numbers')
    .required()
    .messages({ 'any.required': 'missing required phone field' }),
});

module.exports = contactAddSchema;
