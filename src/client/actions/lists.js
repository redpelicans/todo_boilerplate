import 'whatwg-fetch';
import _ from 'lodash';
import { receivedTask } from './tasks';
import { fetched, fetching } from './spinner';
import { requestJSON } from '../helpers';

require('isomorphic-fetch');

export const CREATING_LIST = 'CREATING_LIST';
export const LIST_CREATED = 'LIST_CREATED';
export const LIST_REMOVED = 'LIST_REMOVED';
export const RECEIVED_LIST = 'RECEIVED_LIST';
export const REMOVE_LIST = 'REMOVE_LIST';

const LIST_URL = 'http://rp4.redpelicans.com:13004/api/todo/lists';
const TASK_URL = 'http://rp4.redpelicans.com:13004/api/todo/tasks';

// POST
const listCreated = (list) => ({
  type: LIST_CREATED,
  isFetching: false,
  list,
});

export const createList = (input) => (
  (dispatch) => {
    const options = { method: 'POST' };
    options.headers = {
      'Content-Type': 'application/json',
    };
    options.body = JSON.stringify({
      todo: { label: input },
    });
    dispatch(fetching());
    requestJSON(LIST_URL, options)
    .then(todo => dispatch(listCreated(todo)))
    .then(dispatch(fetched()));
  }
);

// DELETE
const listRemoved = (id) => ({
  type: LIST_REMOVED,
  id,
});

export const removeList = (id) => (
  (dispatch) => {
    const options = { method: 'DELETE' };
    options.headers = {
      'Content-Type': 'application/json',
    };
    const url = `http://rp4.redpelicans.com:13004/api/todo/list/${id}`;
    fetch(url, options)
    .then(dispatch(listRemoved(id)));
  }
);

// GET
const receivedList = (lists) => ({
  type: RECEIVED_LIST,
  isFetching: false,
  lists: _.keyBy(lists, o => o.id),
});

export const fetchList = () => {
  const options = { method: 'GET' };
  return (dispatch) => {
    dispatch(fetching());
    requestJSON(LIST_URL, options)
    .then(lists => dispatch(receivedList(lists)))
    .then(dispatch(fetched()));
    dispatch(fetching());
    requestJSON(TASK_URL, options)
    .then(tasks => dispatch(receivedTask(tasks)))
    .then(dispatch(fetched()));
  };
};
