const { Pool } = require('pg');

const { nanoid } = require('nanoid');
const InvariantError = require('../../exceptions/InvariantError');
const NotFoundError = require('../../exceptions/NotFoundError');

class MovieService {
  constructor() {
    this._pool = new Pool();
  }

  async addMovie({ judul, tahun, genre }) {
    const id = `movie-${nanoid(16)}`;

    const query = {
      text: 'INSERT INTO movies VALUES($1, $2, $3, $4) RETURNING id',
      values: [id, judul, tahun, genre],
    };

    const result = await this._pool.query(query);

    if (!result.rowCount) {
      throw new InvariantError('Movie gagal ditambahkan');
    }

    return result.rows[0].id;
  }

  async getMovies() {
    const query = 'SELECT * FROM movies';

    const result = await this._pool.query(query);

    return result.rows;
  }

  async editMovie(id, { judul, tahun, genre }) {
    const query = {
      text: 'UPDATE movies SET judul = $1, tahun = $2, genre = $3 WHERE id = $4',
      values: [judul, tahun, genre, id],
    };

    const result = await this._pool.query(query);

    if (!result.rowCount) {
      throw new NotFoundError('Gagal memperbarui movie. Movie tidak ditemukan');
    }
  }

  async patchMovie(id, { judul, tahun, genre }) {
    const query = {
      text: 'UPDATE movies SET judul = COALESCE($1, judul), tahun = COALESCE($2, tahun), genre = COALESCE($3, genre) WHERE id = $4',
      values: [judul, tahun, genre, id],
    };

    const result = await this._pool.query(query);

    if (!result.rowCount) {
      throw new NotFoundError('Gagal memperbarui movie. Movie tidak ditemukan');
    }
  }

  async deleteMovie(id) {
    const query = {
      text: 'DELETE FROM movies WHERE id = $1',
      values: [id],
    };

    const result = await this._pool.query(query);

    if (!result.rowCount) {
      throw new NotFoundError('Gagal menghapus movie. Movie tidak ditemukan');
    }
  }
}

module.exports = MovieService;
