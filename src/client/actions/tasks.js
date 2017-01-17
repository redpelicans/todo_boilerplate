import requestJSON from '../requestJSON';
import apiURI from '../apiURI';

export const INITIAL_TASKS_LOADED = 'INITIAL_TASKS_LOADED';
export const TASK_CREATED = 'TASK_CREATED';
export const TASK_REMOVED = 'TASK_REMOVED';
export const TASK_UPDATED = 'TASK_UPDATED';

export const taskCreated = payload => ({
  type: TASK_CREATED,
  payload,
});

export const taskRemoved = payload => ({
  type: TASK_REMOVED,
  payload,
});

export const taskUpdated = payload => ({
  type: TASK_UPDATED,
  payload,
});

export const add = payload => (dispatch) => {
  const body = { task: { ...payload } };
  requestJSON(`${apiURI}/todo/tasks`, body, 'POST')
    .then(task => dispatch(taskCreated(task)));
};

export const remove = payload => (dispatch) => {
  requestJSON(`${apiURI}/todo/task/${payload}`, {}, 'DELETE')
    .then(task => dispatch(taskRemoved(task)));
};

export const update = payload => (dispatch) => {
  const body = { task: { ...payload } };
  requestJSON(`${apiURI}/todo/tasks`, body, 'PUT')
    .then(task => dispatch(taskUpdated(task)));
};
