/**
 * Created by Antoine on 19/07/2016.
 */
import apiCall from './api'

export const ADD_LIST = 'ADD_LIST';
export const DEL_LIST = 'DEL_LIST';
export const INPUT_LIST = 'INPUT_LIST';
export const GOT_LISTS = 'GOT_LISTS';

let currID;

export const addList = (list) => {
  currID = list.id >= currID ? list.id : currID;
  return ({
    type: ADD_LIST,
    list,
  })
}

export const delList = id => ({
  type: DEL_LIST,
  id,
})

export const listInput = input => ({
  type: INPUT_LIST,
  input,
})

export const gotLists = lists => ({
  type: GOT_LISTS,
  lists,
})

// ASYNC STARTING HERE

export const deleteList = (id, callback) => () => (
  apiCall({ method: 'DELETE' })('list/'.concat(id))(callback)
)

export const pushList = (newList, callback) => () => {
  const req = {
    headers: { 'Content-Type': 'application/json' },
    method: 'POST',
    body: JSON.stringify({ 'todo': { 'label': newList } }),
  }
  return apiCall(req)('lists')(callback)
}

export const getLists = callback => () => {
  apiCall({ method: 'GET' })('lists')(callback);
}
