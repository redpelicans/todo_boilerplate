export const ADD_ELEM = 'ADD_ELEM';
export const DELETE_ELEM = 'DELETE_ELEM';
export const DONE_ELEM = 'DONE_ELEM';
export const ENABLE_RENAME_ELEM = 'ENABLE_RENAME_ELEM';
export const INPUT_ADD_ELEM = 'INPUT_ADD_ELEM';
export const INPUT_RENAME_ELEM = 'INPUT_RENAME_ELEM';
export const RENAME_ELEM = 'RENAME_ELEM';

export function addElem(idList) {
  return ({ type: ADD_ELEM, idlist: idList });
}

export function deleteElem(idElem) {
  return ({ type: DELETE_ELEM, idelem: idElem });
}

export function doneElem(idElem) {
  return ({ type: DONE_ELEM, idelem: idElem });
}

export function enableRenameElem(idElem) {
  return ({ type: ENABLE_RENAME_ELEM, idelem: idElem });
}

export function inputAddElem(idList, newentry) {
  return ({ type: INPUT_ADD_ELEM, idlist: idList, text: newentry });
}

export function inputRenameElem(idElem, newentry) {
  return ({ type: INPUT_RENAME_ELEM, idelem: idElem, text: newentry });
}

export function renameElem(idElem) {
  return ({ type: RENAME_ELEM, idelem: idElem });
}
