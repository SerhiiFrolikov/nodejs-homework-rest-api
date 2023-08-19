const Joi = require("Joi");

const addSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  phone: Joi.number().required(),
});

module.exports = {
  addSchema,
};