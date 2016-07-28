import express from 'express';

export function init(resources, params) {
  const app = express();
  require('./todolists').init(app, resources);
  require('./todotasks').init(app, resources);
  return app;
}
