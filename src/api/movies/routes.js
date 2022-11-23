const routes = (handler) => [
  {
    method: 'POST',
    path: '/movies',
    handler: (request, h) => handler.postMovieHandler(request, h),
  },
  {
    method: 'GET',
    path: '/movies',
    handler: () => handler.getMoviesHandler(),
  },
  {
    method: 'PUT',
    path: '/movies/{id}',
    handler: (request) => handler.putMovieHandler(request),
  },
  {
    method: 'PATCH',
    path: '/movies/{id}',
    handler: (request, h) => handler.patchMovieHandler(request, h),
  },
  {
    method: 'DELETE',
    path: '/movies/{id}',
    handler: (request, h) => handler.deleteMovieHandler(request, h),
  },
];

module.exports = routes;
