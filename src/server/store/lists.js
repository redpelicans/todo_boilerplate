import async from 'async';
import { assign } from 'lodash';

const listsKey = () => `todo:lists`;
const listsTasksKey = (id) => `todo:lists:tasks:${id}`;
const idKey = () => 'todo:lists:id';

export default class List {
  constructor(redis, tasks) {
    this.redis = redis;
    this.tasks = tasks;
  }

  _nextId = (cb) => this.redis.incr(idKey(), cb);

  add(list, cb) {
    const add = (id, cb) => {
      const data = { ...list, id };
      this.redis.hset(listsKey(), id, JSON.stringify(data), (err) => cb(err, data));
    }
    async.waterfall([ this._nextId, add ], cb);
  }

  get(id, cb) {
    const get = (cb) => this.redis.hget(listsKey(), id, cb);
    async.waterfall([ get ], (err, data) => {
      if (err) return cb(err);
      cb(null, JSON.parse(data));
    });
  }

  getAll(cb) {
    this.redis.hkeys(listsKey(), (err, ids) => {
      if (err) return cb(err);
      async.map(ids, this.get.bind(this), cb);
    });
  }
}

