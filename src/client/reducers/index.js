import { combineReducers } from 'redux';
import {
  LIST_CREATED,
  RECEIVED_LIST,
  LIST_REMOVED,
} from '../actions/lists';
import {
  RECEIVED_TASK,
  TASK_CREATED,
  TASK_REMOVED,
} from '../actions/tasks';
import {
  FETCHED,
  FETCHING,
} from '../actions/spinner';
import _ from 'lodash';

const initialState = {
  isFetching: false,
  lists: {},
  tasks: {},
};

const lists = (state = initialState.lists, action) => {
  switch (action.type) {
  case LIST_CREATED:
    return {
      ...state,
      [action.list.id]: {
        label: action.list.label,
        isFetching: false,
        id: action.list.id,
      },
    };
  case RECEIVED_LIST:
    return action.lists;
  case LIST_REMOVED:
    return _.omit(state, action.id);
  default:
    return state;
  }
};

const tasks = (state = initialState.tasks, action) => {
  switch (action.type) {
  case TASK_CREATED:
    return {
      ...state,
      [action.task.id]: {
        description: action.task.description,
        id: action.task.id,
        isFetching: false,
        listId: action.task.listId,
      },
    };
  case RECEIVED_TASK:
    return action.tasks;
  case TASK_REMOVED:
    return _.omit(state, action.id);
  default:
    return state;
  }
};

const isFetching = (state = initialState.isFetching, action) => {
  switch (action.type) {
  case FETCHING:
    return action.isFetching;
  case FETCHED:
    return action.isFetching;
  default:
    return state;
  }
};

const rootReducer = combineReducers({
  lists,
  tasks,
  isFetching,
});

export default rootReducer;
