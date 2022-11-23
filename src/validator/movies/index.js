const InvariantError = require('../../exceptions/InvariantError');
const { PostPutMoviePayloadSchema, PatchMoviePayloadSchema } = require('./schema');

const MoviesValidator = {
  validatePostPutMoviesPayload: (payload) => {
    const validationResult = PostPutMoviePayloadSchema.validate(payload);

    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  },
  validatePatchMoviesPayload: (payload) => {
    const validationResult = PatchMoviePayloadSchema.validate(payload);

    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  },
};

module.exports = MoviesValidator;
