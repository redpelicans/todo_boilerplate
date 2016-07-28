import List from './lists';
import Task from './tasks';

export default class Todo {
  constructor(redis) {
    this.redis = redis;
    this.tasks = new Task(redis);
    this.lists = new List(redis, this.tasks);
  }
}
