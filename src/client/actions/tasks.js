import fetch from 'isomorphic-fetch';
import _ from 'lodash';

let nextTaskId = 0;

/*
 * action types
 */

export const TASK_INPUT = 'TASK_INPUT';
export const ADD_TASK = 'ADD_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';
export const REQUEST_TASKS = 'REQUEST_TASKS';
export const RECEIVE_TASKS = 'RECEIVE_TASKS';

/*
 * action creators
 */

export const taskInput = (listId, value) => {
  return {
    type: TASK_INPUT,
    id: listId,
    value,
  };
};

export const addTask = (listId) => {
  nextTaskId = nextTaskId + 1;
  return {
    type: ADD_TASK,
    id: nextTaskId,
    listId,
  };
};

export const removeTask = (id) => {
  return {
    type: REMOVE_TASK,
    id,
  };
};

export const requestTasks = () => {
  return {
    type: REQUEST_TASKS,
  };
};

export const receiveTasks = (json) => {
  return {
    type: RECEIVE_TASKS,
    tasks: json.data.children.map(child => child.data),
  };
};
