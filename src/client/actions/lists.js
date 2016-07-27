/**
 * Created by Antoine on 19/07/2016.
 */
import apiCall from './api'

export const ADD_LIST = 'ADD_LIST';
export const DEL_LIST = 'DEL_LIST';
export const INPUT_LIST = 'INPUT_LIST';
export const REFRESH_LISTS = 'REFRESH_LISTS';

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

export const refreshLists = lists => {
  console.log('Fetch called back with ', ...lists);
  return ({
    type: REFRESH_LISTS,
    lists: lists,
  })
}

export const fetchLists = () => {
  return apiCall('GET')('lists')(refreshLists);
}

// export const fetchLists = () => {
//   console.log('dispatching fetch');
//   apiCall('GET')('lists')(refreshLists)
// }
