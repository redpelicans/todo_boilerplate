import fetch from 'isomorphic-fetch';
import _ from 'lodash';

/*
 * action types
 */

export const ADDING_LIST = 'ADDING_LIST';
export const ADD_LIST = 'ADD_LIST';
export const LIST_ADDED = 'LIST_ADDED';
export const REMOVING_LIST = 'REMOVING_LIST';
export const REMOVE_LIST = 'REMOVE_LIST';
export const LIST_REMOVED = 'LIST_REMOVED';
export const REQUEST_LISTS = 'REQUEST_LISTS';
export const RECEIVE_LISTS = 'RECEIVE_LISTS';

/*
 * action creators
 */

export const addingList = () => ({
  type: ADDING_LIST,
});

export const listAdded = (list) => ({
  type: LIST_ADDED,
  list,
});

export const addList = (title) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ todo: { label: title } }),
  };
  return (dispatch) => {
    dispatch(addingList());
    fetch('http://rp4.redpelicans.com:13004/api/todo/lists', options)
    .then(response => response.json())
    .then(resList => dispatch(listAdded(resList)));
  };
};

export const removingList = () => ({
  type: REMOVING_LIST,
});

export const listRemoved = (id) => ({
  type: LIST_REMOVED,
  id,
});

export const removeList = (id) => {
  const options = {
    method: 'DELETE',
  };
  return (dispatch) => {
    dispatch(removingList());
    fetch(`http://rp4.redpelicans.com:13004/api/todo/list/${id}`, options)
    .then(response => response.json())
    .then(response => dispatch(listRemoved(response.id)));
    dispatch(listRemoved(id));
  };
};

export const requestLists = () => ({
  type: REQUEST_LISTS,
});

export const receiveLists = (json) => ({
  type: RECEIVE_LISTS,
  lists: _.keyBy(json, o => o.id),
});

export const fetchLists = () => (
  (dispatch) => {
    dispatch(requestLists());
    fetch('http://rp4.redpelicans.com:13004/api/todo/lists')
      .then(response => response.json())
      .then(resLists => dispatch(receiveLists(resLists)));
  }
);
