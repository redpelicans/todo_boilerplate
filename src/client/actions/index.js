let nextListId = 0;
let nextTaskId = 0;

/*
 * action types
 */

export const ADD_LIST = 'ADD_LIST';
export const REMOVE_LIST = 'REMOVE_LIST';
export const ADD_TASK = 'ADD_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';
export const INPUT_LIST = 'INPUT_LIST';
export const INPUT_TASK = 'INPUT_TASK';

/*
 * action creators
 */

export function addList(id, title) {
  return {
    type: ADD_LIST,
    id,
    title,
  };
}

export function removeList(id) {
  return {
    type: REMOVE_LIST,
    id,
  };
}

export function addTask(id, listId, text) {
  return {
    type: ADD_TASK,
    id,
    listId,
    text,
  };
}

export function removeTask(id) {
  return {
    type: REMOVE_TASK,
    id,
  };
}

export function listInput(value) {
  return {
    type: INPUT_LIST,
    value,
  };
}

export function taskInput(listId, value) {
  return {
    type: INPUT_TASK,
    id: listId,
    value,
  };
}
