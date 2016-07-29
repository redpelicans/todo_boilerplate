import _ from 'lodash';
import { doFetch, isFetching, finishedFetching } from './fetching';

export const ADD_TASK = 'ADD_TASK';
export const ADDED_TASK = 'ADDED_TASK';
export const DELETED_TASK = 'DELETED_TASK';
export const FETCHED_TASKS = 'FETCHED_TASKS';
export const RENAMED_TASK = 'RENAMED_TASK';

const url = 'http://rp4.redpelicans.com:13004/api/todo/tasks';

const headers = { 'Accept': 'application/json', 'Content-Type': 'application/json' };

export const addedTask = (id, idlist, name) => ({ type: ADDED_TASK, id, idlist, name });

export const addTask = (listid, newtask) => (
  (dispatch) => {
    dispatch(isFetching());
    return (
      doFetch(url, { method: 'POST', headers,
      body: JSON.stringify({ task: { description: newtask, listId: listid } }) })
      .then(response => response.json())
      .then(response => dispatch(addedTask(response.id, listid, newtask)))
      .then(() => dispatch(finishedFetching()))
    );
  }
);

export const deletedTask = (id) => ({ type: DELETED_TASK, id });

export const deleteTask = (id) => (
  (dispatch) => {
    dispatch(isFetching());
    return (
      doFetch(`http://rp4.redpelicans.com:13004/api/todo/task/${id}`, { method: 'DELETE', headers })
      .then(dispatch(deletedTask(id)))
      .then(() => dispatch(finishedFetching()))
    );
  }
);

export const renamedTask = (id, newname) => ({ type: RENAMED_TASK, id, newname });

export const renameTask = (id, newname) => (
  (dispatch) => {
    dispatch(isFetching());
    return (
      doFetch(url, { method: 'PUT', headers,
      body: JSON.stringify({ task: { id, description: newname } }) })
      .then(dispatch(renamedTask(id, newname)))
      .then(() => dispatch(finishedFetching()))
    );
  }
);

export const fetchedTasks = (tasks) => ({ type: FETCHED_TASKS, tasks: _.keyBy(tasks, (task) => task.id) });

export const fetchTasks = () => (
  (dispatch) => {
    dispatch(isFetching());
    return (
      doFetch(url, { method: 'GET', headers })
      .then(response => response.json())
      .then(tasks => dispatch(fetchedTasks(tasks)))
      .then(() => dispatch(finishedFetching()))
    );
  }
);
