export const ADD_LIST = 'ADD_LIST';
export const DELETE_LIST = 'DELETE_LIST';
export const INPUT_ADD_LIST = 'INPUT_ADD_LIST';
export const INPUT_RENAME_LIST = 'INPUT_RENAME_LIST';
export const RENAME_LIST = 'RENAME_LIST';
export const ENABLE_RENAME_LIST = 'ENABLE_RENAME_LIST';

export function addList() {
  return ({ type: ADD_LIST });
}

export function deleteList(id) {
  return ({ type: DELETE_LIST, idlist: id });
}

export function inputAddList(newentry) {
  return ({ type: INPUT_ADD_LIST, text: newentry });
}

export function inputRenameList(newentry, id) {
  return ({ type: INPUT_RENAME_LIST, idlist: id, text: newentry });
}

export function renameList(id) {
  return ({ type: RENAME_LIST, idlist: id });
}

export function enableRenameList(id) {
  return ({ type: ENABLE_RENAME_LIST, idlist: id });
}
