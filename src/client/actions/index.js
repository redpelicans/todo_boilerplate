let nextListId = 0;
let nextTaskId = 0;

/*
 * action types
 */

export const LIST_INPUT = 'LIST_INPUT';
export const ADD_LIST = 'ADD_LIST';
export const REMOVE_LIST = 'REMOVE_LIST';
export const TASK_INPUT = 'TASK_INPUT';
export const ADD_TASK = 'ADD_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';
export const REQUEST_LISTS = 'REQUEST_LISTS';
export const REQUEST_TASKS = 'REQUEST_TASKS';

/*
 * action creators
 */

export function listInput(value) {
  return {
    type: LIST_INPUT,
    value,
  };
}

export function addList() {
  nextListId = nextListId + 1;
  return {
    type: ADD_LIST,
    id: nextListId,
  };
}

export function removeList(id) {
  return {
    type: REMOVE_LIST,
    id,
  };
}

export function taskInput(listId, value) {
  return {
    type: TASK_INPUT,
    id: listId,
    value,
  };
}

export function addTask(listId) {
  nextTaskId = nextTaskId + 1;
  return {
    type: ADD_TASK,
    id: nextTaskId,
    listId,
  };
}

export function removeTask(id) {
  return {
    type: REMOVE_TASK,
    id,
  };
}

export function requestLists() {
  return {
    type: REQUEST_LISTS,
  };
}

export function requestTasks() {
  return {
    type: REQUEST_TASKS,
  };
}
