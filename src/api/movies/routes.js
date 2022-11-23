const routes = (handler) => [
  {
    method: 'POST',
    path: '/movies',
    handler: (request, h) => handler.postMovieHandler(request, h),
    options: {
      auth: 'movieapp_jwt',
    },
  },
  {
    method: 'GET',
    path: '/movies',
    handler: () => handler.getMoviesHandler(),
    options: {
      auth: 'movieapp_jwt',
    },
  },
  {
    method: 'PUT',
    path: '/movies/{id}',
    handler: (request) => handler.putMovieHandler(request),
    options: {
      auth: 'movieapp_jwt',
    },
  },
  {
    method: 'PATCH',
    path: '/movies/{id}',
    handler: (request, h) => handler.patchMovieHandler(request, h),
    options: {
      auth: 'movieapp_jwt',
    },
  },
  {
    method: 'DELETE',
    path: '/movies/{id}',
    handler: (request, h) => handler.deleteMovieHandler(request, h),
    options: {
      auth: 'movieapp_jwt',
    },
  },
];

module.exports = routes;
