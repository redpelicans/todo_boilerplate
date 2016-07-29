import { combineReducers } from 'redux';
import { CHANGE_LIST, CREATE_LIST, REMOVE_LIST } from '../actions/lists';
import { CHANGE_TASK, CREATE_TASK, REMOVE_TASK } from '../actions/tasks';

import _ from 'lodash';

const listReducer = (state = {}, action) => {
  switch (action.type) {
  case CREATE_LIST:
    return {
      ...state,
      [action.listId]: {
        title: action.title,
        listId: action.listId,
      },
    };
  case CHANGE_LIST:
    return {
      ...state,
      listVal: action.listVal,
    };
  case REMOVE_LIST:
    return _.omit(state, action.listId);
  default:
    return state;
  }
};

const taskReducer = (state = {}, action) => {
  switch (action.type) {
  case CREATE_TASK:
    return {
      ...state,
      [action.taskId]: {
        listId: action.listId,
        name: action.name,
        taskId: action.taskId,
      },
    };
  case CHANGE_TASK:
    return {
      ...state,
      taskVal: action.taskVal,
    };
  case REMOVE_TASK:
    return _.omit(state, action.taskId);
  default:
    return state;
  }
};

const rootReducer = combineReducers({
  lists: listReducer,
  tasks: taskReducer,
});

export default rootReducer;
