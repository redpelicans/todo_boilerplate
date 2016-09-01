import { requestJSON } from '../helpers/utils';
import { removeTask } from './task';
import _ from 'lodash';

export const ADD_LIST = 'ADD_LIST';
export const REMOVE_LIST = 'REMOVE_LIST';
export const REMOVED_LIST = 'REMOVED_LIST';
export const LIST_ADDED = 'LIST_ADDED';
export const ADDING_LIST = 'ADDING_LIST';
export const REMOVING_LIST = 'REMOVING_LIST';


export const listAdded = (list) => ({ type: LIST_ADDED, list });

export const addingList = () => ({ type: ADDING_LIST });

export const removedList = (idList) => ({ type: REMOVED_LIST, idList });

export const removingList = () => ({ type: REMOVING_LIST });

export const removeList = (idList) => {
  return (dispatch, getState) => {
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    };
    console.log('idList removeList : ', idList);
    dispatch(removingList());
    const url = `http://localhost:3000/todo/lists/${idList}`;
    requestJSON(url, options)
    .then(dispatch(removedList(idList)));
  };
};

export const addList = (input) => {
  return (dispatch) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    };
    dispatch(addingList());
    options.body = JSON.stringify({ todo: { label: input } });
    const url = 'http://localhost:3000/todo/lists';
    requestJSON(url, options)
    .then(todo => dispatch(listAdded(todo)));
  };
};
