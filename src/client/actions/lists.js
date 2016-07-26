/**
 * Created by Antoine on 19/07/2016.
 */

export const ADD_LIST = 'ADD_LIST';
export const DEL_LIST = 'DEL_LIST';
export const INPUT_LIST = 'INPUT_LIST';

let currID;

export const addList = (list) => {
  currID = list.id >= currID ? list.id : currID;
  console.log('currID : ', currID);
  return ({
    type: ADD_LIST,
    list,
  })
}

export const delList = (id) => ({
  type: DEL_LIST,
  id,
})

export const listInput = (input) => ({
  type: INPUT_LIST,
  input,
})
