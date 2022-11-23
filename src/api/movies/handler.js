class MoviesHandler {
  constructor(service, validator) {
    this._service = service;
    this._validator = validator;
  }

  async postMovieHandler(request, h) {
    this._validator.validatePostPutMoviesPayload(request.payload);
    const { judul, tahun, genre } = request.payload;

    const movieId = await this._service.addMovie({ judul, tahun, genre });

    const response = h.response({
      status: 'success',
      data: {
        movieId,
      },
    });

    response.code(201);
    return response;
  }

  async getMoviesHandler() {
    const movies = await this._service.getMovies();

    return {
      status: 'success',
      data: {
        movies,
      },
    };
  }

  async putMovieHandler(request) {
    this._validator.validatePostPutMoviesPayload(request.payload);
    const { id } = request.params;

    await this._service.editMovie(id, request.payload);

    return {
      status: 'success',
      message: 'Movie berhasil diperbarui',
    };
  }

  async patchMovieHandler(request) {
    this._validator.validatePatchMoviesPayload(request.payload);
    const { id } = request.params;

    await this._service.patchMovie(id, request.payload);

    return {
      status: 'success',
      message: 'Movie berhasil diperbarui',
    };
  }

  async deleteMovieHandler(request) {
    const { id } = request.params;

    await this._service.deleteMovie(id);

    return {
      status: 'success',
      message: 'Movie berhasil dihapus',
    };
  }
}

module.exports = MoviesHandler;
