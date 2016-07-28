import should from "should";
import async from "async";
import request from "request";
import { map, assign } from "lodash";
import { createServer } from './helpers/server';
import config from '../src/config';

const params = config[process.env.NODE_ENV];

let serverUrl;

describe('Rest todoTask API', function(){
  let server, resources;

  before(cb => {
    createServer(params, (err, data) => {
      if (err) return cb(err);
      server = data.server;
      serverUrl = server.url;
      resources = data.resources;
      cb();
    })
  })

  // call foreach it()
  beforeEach(done => resources.store.redis.flushdb(done))

  // call once after each  describe()
  after(done => server.stop(done))

  it('should add task', function(done){
    done();
  })

  it('should not add task with wrong listId', function(done){
    done();
  })
  
  it('should not add task without listId', function(done){
    done();
  })

  it('should update task', function(done){
    done();
  })

  it('should remove task', function(done){
    done();
  })

  it('should load all tasks', function(done){
    done();
  })

})
