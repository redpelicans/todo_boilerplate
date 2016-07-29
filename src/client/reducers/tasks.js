import { REMOVED_TASK, TASK_ADDED } from '../actions/task';
import { REMOVED_LIST } from '../actions/list';
import { MADE_TASKS } from '../actions/fetch';
import _ from 'lodash';

export default function tasks(state = {}, action) {
  switch (action.type) {
  case TASK_ADDED:
    return {
      ...state,
      [action.task.id]: {
        id: action.task.id,
        listId: action.task.listId,
        description: action.task.description,
      },
    };
  case REMOVED_TASK:
    return {
      ..._.omit(state, action.idTask),
    };
  case MADE_TASKS:
    return {
      ...state,
      ...action.tasks,
    };
  case REMOVED_LIST:
    return {
      ..._.omitBy(state, { 'listId': action.idList }),
    };
  default:
    return state;
  }
}
