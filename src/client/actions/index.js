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

/*
 * action creators
 */

export function listInput(value) {
 return {
   type: LIST_INPUT,
   value,
 };
}

export function addList(title) {
  return {
    type: ADD_LIST,
    id: nextListId++,
    title,
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
