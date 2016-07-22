import { ADD_LIST, DELETE_LIST, INPUT_ADD_LIST,
  INPUT_RENAME_LIST, RENAME_LIST, ENABLE_RENAME_LIST } from '../actions/lists';
import _ from 'lodash';

let id = 0;

const todoLists = (state = { addlist: '' }, action) => {
  switch (action.type) {
  case ADD_LIST:
    id = id + 1;
    return ({
      ...state,
      [id]: { name: state.addlist, rename: false, input: '' },
      addlist: '' });
  case INPUT_ADD_LIST:
    return ({
      ...state,
      addlist: action.text });
  case INPUT_RENAME_LIST:
    return ({
      ...state,
      [action.idlist]: {
        ...state[action.idlist],
        input: action.text } });
  case DELETE_LIST:
    return (_.omit(state, action.idlist));
  case RENAME_LIST:
    return ({
      ...state,
      [action.idlist]: { name: state[action.idlist].input, rename: false, input: '' } });
  case ENABLE_RENAME_LIST:
    return ({
      ...state,
      [action.idlist]: {
        ...state[action.idlist],
        rename: !(state[action.idlist].rename) } });
  default:
    return state;
  }
};

export default todoLists;
