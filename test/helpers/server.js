import * as server from '../../src/server';

export const createServer = (params, cb) => {
  server.create(params)
    .then(({ server, resources }) => {
      const stop = (cb) => server.stop(cb);
      cb(null, { resources, server });
    })
    .catch( err => cb(err) );
}
