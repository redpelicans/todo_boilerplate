import { ADDED_TASK, DELETED_TASK, FETCHED_TASKS, RENAMED_TASK } from '../actions/tasks';
import _ from 'lodash';

const todoTasks = (state = {}, action) => {
  switch (action.type) {
  case FETCHED_TASKS:
    return (action.tasks);
  case ADDED_TASK:
    return ({
      ...state,
      [action.id]: { id: action.id, listId: action.idlist, description: action.name } });
  case DELETED_TASK:
    return (_.omit(state, action.id));
  case RENAMED_TASK:
    return ({
      ...state,
      [action.id]: {
        ...state[action.id],
        description: action.newname } });
  default:
    return state;
  }
};

export default todoTasks;
