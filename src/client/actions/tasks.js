import 'whatwg-fetch';
import _ from 'lodash';
import { requestJSON } from '../helpers';
import { fetched, fetching } from './spinner';

export const CREATE_TASK = 'CREATE_TASK';
export const CREATING_TASK = 'CREATING_TASK';
export const RECEIVED_TASK = 'RECEIVED_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';
export const TASK_CREATED = 'TASK_CREATED';
export const TASK_REMOVED = 'TASK_REMOVED';

require('isomorphic-fetch');

const TASK_URL = 'http://rp4.redpelicans.com:13004/api/todo/tasks';

// GET
export const receivedTask = (tasks) => ({
  type: RECEIVED_TASK,
  isFetching: false,
  tasks: _.keyBy(tasks, o => o.id),
});

// POST

const taskCreated = (task) => ({
  type: TASK_CREATED,
  isFetching: false,
  task,
});

export const createTask = (input, idList) => (
  (dispatch) => {
    const options = { method: 'POST' };
    options.headers = {
      'Content-Type': 'application/json',
    };
    options.body = JSON.stringify({
      task:
        { description: input,
        listId: idList,
      },
    });
    dispatch(fetching());
    requestJSON(TASK_URL, options)
    .then(todo => dispatch(taskCreated(todo)))
    .then(dispatch(fetched()));
  }
);

// REMOVE
const taskRemoved = (id) => ({
  type: TASK_REMOVED,
  id,
  isFetching: false,
});

export const removeTask = (id) => (
  (dispatch) => {
    const options = { method: 'DELETE' };
    options.headers = {
      'Content-Type': 'application/json',
    };
    const url = `http://rp4.redpelicans.com:13004/api/todo/task/${id}`;
    fetch(url, options)
    .then(dispatch(taskRemoved(id)));
  }
);
