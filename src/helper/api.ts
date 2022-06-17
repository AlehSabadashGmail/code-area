export const HTTP_METHODS = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  PATCH: 'PATCH',
  DELETE: 'DELETE',
} as const

export const API_HOSTS = {
  AUTH: '/',
  USERS: '/users',
  USERS_ID: '/users/:id',
} as const
