import fetch from 'isomorphic-fetch';
import _ from 'lodash';

/*
 * action types
 */

export const ADDING_TASK = 'ADDING_TASK';
export const ADD_TASK = 'ADD_TASK';
export const TASK_ADDED = 'TASK_ADDED';
export const REMOVING_TASK = 'REMOVING_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';
export const TASK_REMOVED = 'TASK_REMOVED';
export const REQUEST_TASKS = 'REQUEST_TASKS';
export const RECEIVE_TASKS = 'RECEIVE_TASKS';

/*
 * action creators
 */

export const addingTask = () => {
  return {
    type: ADDING_TASK,
  };
};

export const addTask = (listId, text) => {
  return (dispatch) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        task: {
          description: text,
          listId,
        },
      }),
    };
    dispatch(addingTask());
    fetch('http://rp4.redpelicans.com:13004/api/todo/tasks', options)
    .then(response => response.json())
    .then(resTask => dispatch(taskAdded(resTask)));
  };
};

export const taskAdded = (task) => {
  return {
    type: TASK_ADDED,
    task,
  };
};

export const removingTask = () => {
  return {
    type: REMOVING_TASK,
  };
};

export const removeTask = (id) => {
  return (dispatch) => {
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Methods': 'DELETE',
      },
    };
    dispatch(removingTask());
    //fetch(`http://rp4.redpelicans.com:13004/api/todo/task/${id}`, options)
    //.then(response => response.json())
    //.then(response => dispatch(taskRemoved(response.id)));
    dispatch(taskRemoved(id));
  };
};

export const taskRemoved = (id) => {
  return {
    type: TASK_REMOVED,
    id,
  };
};

export const requestTasks = () => {
  return {
    type: REQUEST_TASKS,
  };
};

export const fetchTasks = () => {
  return (dispatch) => {
    dispatch(requestTasks());
    fetch('http://rp4.redpelicans.com:13004/api/todo/tasks')
      .then(response => response.json())
      .then(resTasks => dispatch(receiveTasks(resTasks)));
  };
};

export const receiveTasks = (json) => {
  return {
    type: RECEIVE_TASKS,
    tasks: _.keyBy(json, o => o.id),
  };
};
