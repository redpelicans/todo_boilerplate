export const ADD_LIST = 'ADD_LIST';
export const REMOVE_LIST = 'REMOVE_LIST';
export const CHANGE_LIST = 'CHANGE_LIST';

let idListGlobal = 2;

export const addList = () => {
  idListGlobal = idListGlobal + 1;
  return {
    type: ADD_LIST,
    id: idListGlobal,
  };
};

export const changeList = (inputlist) => ({ type: CHANGE_LIST, inputlist });

export const removeList = (idList) => ({ type: REMOVE_LIST, idList });
