import { FETCHED_LISTS, ADDED_LIST, DELETED_LIST, RENAMED_LIST } from '../actions/lists';
import _ from 'lodash';

const todoLists = (state = {}, action) => {
  switch (action.type) {
  case FETCHED_LISTS:
    return (action.lists);
  case ADDED_LIST:
    return ({
      ...state,
      [action.id]: { id: action.id, label: action.name } });
  case DELETED_LIST:
    return (_.omit(state, action.id));
  case RENAMED_LIST:
    return ({
      ...state,
      [action.id]: { id: action.id, label: action.newname } });
  default:
    return state;
  }
};

export default todoLists;
