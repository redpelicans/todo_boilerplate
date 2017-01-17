import apiURI from './apiURI';

export const state = {
  todos: [],
  tasks: [],
};

const fetchInitial = (uri, cb) => {
  fetch(uri)
    .then((data) => {
      if (data.status === 200) {
        if (data.json) return data.json();
      }
      return null;
    })
    .then(json => cb(json))
    .catch(console.error); // eslint-disable-line no-console
};

export const getInitialTodos = (cb) => {
  fetchInitial(`${apiURI}/todo/lists`, cb);
};

export const getInitialTasks = (cb) => {
  fetchInitial(`${apiURI}/todo/tasks`, cb);
};
