/**
 * Created by Antoine on 19/07/2016.
 */

export const ADD_LIST = 'ADD_LIST';
export const DEL_LIST = 'DEL_LIST';
export const INPUT_LIST = 'INPUT_LIST';

let currID = 1;

export const addList = title => {
  currID = currID + 1;
  return ({
    type: ADD_LIST,
    list: { title, id: currID },
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
