import should from "should";
import async from "async";
import request from "request";
import { map, assign } from "lodash";
import { createServer } from './helpers/server';
import config from '../src/config';

const params = config[process.env.NODE_ENV];

let serverUrl;

const addList = (todo, cb) => {
  request.post({
    url: `${serverUrl}/api/todo/lists`,
    json: { todo }
  }, cb);
}


const getAllLists = (cb) => {
  request.get({
    url: `${serverUrl}/api/todo/lists`,
    json: true,
  }, cb);
}

describe('Rest todoList API', function(){
  this.timeout(2000)
  let server, resources;

  // call once foreach  describe()
  before(cb => createServer(params, (err, data) => {
    if (err) return cb(err);
    server = data.server;
    serverUrl = server.url;
    resources = data.resources;
    cb();
  }))

  // call foreach it()
  beforeEach(done => resources.store.redis.flushdb(done))

  // call once after each  describe()
  after(done => server.stop(done))

  it('should add list', function(done){
    const todo = { label: 'COUCOU' };
    addList(todo, (err, resp, body) => {
      if (err) return done(err);
      body.should.have.property('label').eql(todo.label);
      body.should.have.property('id').eql(1);
      resources.store.todos.lists.get(body.id, (err, list) => {
        if (err) return done(err);
        list.should.have.property('label').eql(todo.label);
        list.should.have.property('id').eql(body.id);
        done();
      })
    })
  })

  it('should remove list', function(done){
    done();
  })

  it('should update list', function(done){
    done();
  })

  it('should load all lists', function(done){
    const todos = [
      { label: 'COUCOU1' },
      { label: 'COUCOU2' },
      { label: 'COUCOU3' },
    ];

    async.waterfall([
      (cb) => {
        async.map(
          todos,
          (todo, cb) => resources.store.todos.lists.add(todo, cb),
          (err) => cb(err)
        )
      },
      getAllLists
    ], (err, resp, body) => {
      if (err) return done(err);
      should(map(todos, (list) => list.label).join(' ')).eql(map(body, (list) => list.label).join(' '));
      done();
    });
  })

})
