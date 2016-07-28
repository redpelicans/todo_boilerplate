import { ADDING_LIST, LIST_ADDED, REMOVING_LIST, REMOVED_LIST } from '../actions/list';
import { ADDING_TASK, TASK_ADDED, REMOVING_TASK, REMOVED_TASK } from '../actions/task';
import { MAKING_TASKS, MADE_TASKS, MAKING_LISTS, MADE_LISTS } from '../actions/fetch';

export default function status(state = {}, action) {
  switch (action.type) {
  case ADDING_LIST:
    return {
      ...state,
      isLoading: 1,
    };
  case ADDING_TASK:
    return {
      ...state,
      isLoading: 1,
    };
  case TASK_ADDED:
    return {
      ...state,
      isLoading: 0,
    };
  case LIST_ADDED:
    return {
      ...state,
      isLoading: 0,
    };
  case REMOVING_LIST:
    return {
      ...state,
      isLoading: 1,
    };
  case REMOVING_TASK:
    return {
      ...state,
      isLoading: 1,
    };
  case REMOVED_LIST:
    return {
      ...state,
      isLoading: 0,
    };
  case REMOVED_TASK:
    return {
      ...state,
      isLoading: 0,
    };
  case MADE_LISTS:
    return {
      ...state,
      isLoading: 0,
    };
  case MADE_TASKS:
    return {
      ...state,
      isLoading: 0,
    };
  case MAKING_LISTS:
    return {
      ...state,
      isLoading: 1,
    };
  case MAKING_TASKS:
    return {
      ...state,
      isLoading: 1,
    };
  default:
    return state;
  }
}
