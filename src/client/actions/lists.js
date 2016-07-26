import fetch from 'isomorphic-fetch';
import _ from 'lodash';

/*
 * action types
 */

export const LIST_INPUT = 'LIST_INPUT';
export const ADDING_LIST = 'ADDING_LIST';
export const ADD_LIST = 'ADD_LIST';
export const LIST_ADDED = 'LIST_ADDED';
export const REMOVE_LIST = 'REMOVE_LIST';
export const REQUEST_LISTS = 'REQUEST_LISTS';
export const RECEIVE_LISTS = 'RECEIVE_LISTS';

/*
 * action creators
 */

export const listInput = (value) => {
 return {
   type: LIST_INPUT,
   value,
 };
};

export const addingList = () => {
 return {
   type: ADDING_LIST,
 };
};

export const addList = (list) => {
 return (dispatch, getState) => {
   const { lists:{ input } } = getState();
   const options = {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json',
     }
     body: JSON.stringify({ todo: { label: input } });
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

export const removeList = (id) => {
 return {
   type: REMOVE_LIST,
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
    return fetch('http://rp4.redpelicans.com:13004/api/todo/lists')
      .then(response => response.json())
      .then(json => dispatch(receiveLists(json)));
  };
};

export const receiveLists = (json) => {
  const lists =_.map({ ...json }, list => ([list.id]: {
    id: list.id,
    title: list.label,
  }));
  console.log('RECEIVE_LIST:', lists);
  return {
    type: RECEIVE_LISTS,
    lists,
  };
};
