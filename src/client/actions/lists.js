export const CREATE_LIST = 'CREATE_LIST';
export const CHANGE_LIST = 'CHANGE_LIST';
export const REMOVE_LIST = 'REMOVE_LIST';

let listId = 2;

export const createList = (title) => {
  listId = listId + 1;
  return {
    type: CREATE_LIST,
    title,
    listId,
  };
};

export const changeList = (listVal) => {
  return {
    type: CHANGE_LIST,
    listVal,
  };
};

export const removeList = (listId) => {
  return {
    type: REMOVE_LIST,
    listId,
  };
};

