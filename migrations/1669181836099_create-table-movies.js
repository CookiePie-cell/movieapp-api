/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.createTable('movies', {
    id: {
      type: 'VARCHAR(50)',
      primaryKey: true,
    },
    judul: {
      type: 'TEXT',
      notNull: true,
    },
    tahun: {
      type: 'INTEGER',
      notNull: true,
    },
    genre: {
      type: 'TEXT',
      notNull: true,
    },
  });
};

exports.down = (pgm) => {
  pgm.dropTable('movies');
};
