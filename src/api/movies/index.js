const MoviesHandler = require('./handler');
const routes = require('./routes');

module.exports = {
  name: 'movies',
  version: '1.0.0',
  register: async (server, { service, validator }) => {
    const moviesHandler = new MoviesHandler(service, validator);
    server.route(routes(moviesHandler));
  },
};
