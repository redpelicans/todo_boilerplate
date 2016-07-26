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

export const addingList = () => {
  return {
    type: ADDING_LIST,
  };
};

export const addList = (title) => {
  return (dispatch) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ todo: { label: title } }),
    };
    dispatch(addingList());
    fetch('http://rp4.redpelicans.com:13004/api/todo/lists', options)
    .then(response => response.json())
    .then(resList => dispatch(listAdded(resList)));
  };
};

export const listAdded = (list) => {
  return {
    type: LIST_ADDED,
    list,
  };
};

export const removingList = () => {
  return {
    type: REMOVING_LIST,
  };
};

export const removeList = (id) => {
  return (dispatch) => {
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Methods': 'DELETE',
      },
    };
    dispatch(removingList());
    //fetch(`http://rp4.redpelicans.com:13004/api/todo/list/${id}`, options)
    //.then(response => response.json())
    //.then(response => dispatch(listRemoved(response.id)));
    dispatch(listRemoved(id));
  };
};

export const listRemoved = (id) => {
  return {
    type: LIST_REMOVED,
    id,
  };
};

export const requestLists = () => {
  return {
    type: REQUEST_LISTS,
  };
};

export const fetchLists = () => {
  return (dispatch) => {
    dispatch(requestLists());
    fetch('http://rp4.redpelicans.com:13004/api/todo/lists')
      .then(response => response.json())
      .then(resLists => dispatch(receiveLists(resLists)));
  };
};

export const receiveLists = (json) => {
  return {
    type: RECEIVE_LISTS,
    lists: _.keyBy(json, o => o.id),
  };
};
