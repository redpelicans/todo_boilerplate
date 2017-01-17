import requestJSON from '../requestJSON';
import apiURI from '../apiURI';

export const INITIAL_TODOS_LOADED = 'INITIAL_TODOS_LOADED';
export const TODO_CREATED = 'TODO_CREATED';
export const TODO_REMOVED = 'TODO_REMOVED';
export const TODO_UPDATED = 'TODO_UPDATED';

export const todoCreated = payload => ({
  type: TODO_CREATED,
  payload,
});

export const todoUpdated = payload => ({
  type: TODO_UPDATED,
  payload,
});

export const todoRemoved = payload => ({
  type: TODO_REMOVED,
  payload,
});

export const create = payload => (dispatch) => {
  const body = { todo: payload };
  requestJSON(`${apiURI}/todo/lists`, body, 'POST')
    .then(todo => dispatch(todoCreated(todo)));
};

export const update = payload => (dispatch) => {
  const body = { todo: payload };
  requestJSON(`${apiURI}/todo/lists`, body, 'PUT')
    .then(todo => dispatch(todoUpdated(todo)));
};

export const remove = payload => (dispatch) => {
  requestJSON(`${apiURI}/todo/list/${payload}`, {}, 'DELETE')
    .then(todo => dispatch(todoRemoved(todo)));
};
