const Joi = require('joi');

const UserPayloadSchema = Joi.object({
  username: Joi.string().max(50).required(),
  password: Joi.string().required(),
  namaLengkap: Joi.string().required(),
});

module.exports = { UserPayloadSchema };
