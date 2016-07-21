/**
 * Created by Antoine on 19/07/2016.
 */

export const ADD_LIST = 'ADD_LIST';
export const DEL_LIST = 'DEL_LIST';

export const addList = (list) => ({
  type: ADD_LIST,
  list
});

export const delList = (list) => ({
  type: DEL_LIST,
  id: list.id
});
