import { ADD_ELEM, DELETE_ELEM, DONE_ELEM, ENABLE_RENAME_ELEM,
  INPUT_ADD_ELEM, INPUT_RENAME_ELEM, RENAME_ELEM } from '../actions/elems';
import _ from 'lodash';

let id = 0;

const todoElems = (state = { addelem: {} }, action) => {
  switch (action.type) {
  case ADD_ELEM:
    id = id + 1;
    return ({
      ...state,
      [id]: { done: false, idlist: action.idlist, name: state.addelem[action.idlist], rename: false, input: '' },
      addelem: _.omit(state.addelem, action.idlist) });
  case DELETE_ELEM:
    return (_.omit(state, action.idelem));
  case DONE_ELEM:
    return ({
      ...state,
      [action.idelem]: {
        ...state[action.idelem],
        done: !(state[action.idelem].done) } });
  case ENABLE_RENAME_ELEM:
    return ({
      ...state,
      [action.idelem]: {
        ...state[action.idelem],
        rename: !(state[action.idelem].rename) } });
  case INPUT_ADD_ELEM:
    return ({
      ...state,
      addelem: {
        ...state.addelem,
        [action.idlist]: action.text } });
  case INPUT_RENAME_ELEM:
    return ({
      ...state,
      [action.idelem]: {
        ...state[action.idelem],
        input: action.text } });
  case RENAME_ELEM:
    return ({
      ...state,
      [action.idelem]: {
        ...state[action.idelem],
        name: state[action.idelem].input,
        rename: false,
        input: '' } });
  default:
    return state;
  }
};

export default todoElems;
