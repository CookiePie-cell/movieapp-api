const Joi = require('joi');

const PostPutMoviePayloadSchema = Joi.object({
  judul: Joi.string().required(),
  tahun: Joi.number().integer().required(),
  genre: Joi.string().required(),
});

const PatchMoviePayloadSchema = Joi.object({
  judul: Joi.string(),
  tahun: Joi.number().integer(),
  genre: Joi.string(),
});

module.exports = { PostPutMoviePayloadSchema, PatchMoviePayloadSchema };
