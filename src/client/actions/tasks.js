/*
 * action types
 */

export const ADD_TASK = 'ADD_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';

/*
 * action creators
 */

export function addTask(text) {
  return {
    type: ADD_TASK,
    text,
  };
}

export function removeTask(id) {
  return {
    type: REMOVE_TASK,
    id,
  };
}
