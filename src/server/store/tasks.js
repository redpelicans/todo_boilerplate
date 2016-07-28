import async from 'async';

export default class Task {
  constructor(redis) {
    this.redis = redis;
  }

  _nextId = (cb) => this.redis.incr(idKey(), cb);

}

