import async from 'async'; 
import * as app  from './app';
import initGithash from './init/githash';
import initModels from './init/models';
import { loginfo, logerror } from './util';

let resources = {};
    
const version = require('../../package.json').version;

export function create(params){
  let promise = new Promise((resolve, reject) => {
    async.parallel({
      store: initModels(params.store),
      githash: initGithash()
    }, (err, init) => {
      if (err) return reject(err);
      resources.store = init.store;
      resources.version = version;
      resources.githash = init.githash;
      app.start(params.server, resources, (err, server) => {
        if(err) reject(err);
        resolve({ server, resources });
      });
    });
  });
  return promise;
}
