/*
 * action types
 */

export const ADD_LIST = 'ADD_LIST';
export const REMOVE_LIST = 'REMOVE_LIST';

/*
 * action creators
 */

export function addList(title, id) {
  return {
    type: ADD_LIST,
    title,
    id,
  };
}

export function removeList(id) {
  return {
    type: REMOVE_LIST,
    id,
  };
}
