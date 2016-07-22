import { combineReducers } from 'redux';
import todoLists from './todolists';
import todoElems from './todoelems';

const todo = combineReducers({
  elems: todoElems,
  lists: todoLists });

export default todo;
