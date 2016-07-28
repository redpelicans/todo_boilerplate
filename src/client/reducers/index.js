import _ from 'lodash';
import * as list from '../actions/lists';
import * as task from '../actions/tasks';

function lists(state = { data: {}, isFetching: false }, action) {
  switch (action.type) {
  case list.ADDING_LIST:
    return {
      ...state,
    };
  case list.LIST_ADDED:
    return {
      ...state,
      data: {
        ...state.data,
        [action.list.id]: {
          id: action.list.id,
          label: action.list.label,
        },
      },
    };
  case list.REMOVING_LIST:
    return {
      ...state,
    };
  case list.LIST_REMOVED:
    return {
      ...state,
      data: _.omit(state.data, action.id),
    };
  case list.REQUEST_LISTS:
    return {
      ...state,
      isFetching: true,
    };
  case list.RECEIVE_LISTS:
    return {
      ...state,
      isFetching: false,
      data: action.lists,
    };
  default:
    return state;
  }
}

function tasks(state = { data: {}, isFetching: false }, action) {
  switch (action.type) {
  case task.ADDING_TASK:
    return {
      ...state,
    };
  case task.TASK_ADDED:
    return {
      ...state,
      data: {
        ...state.data,
        [action.task.id]: {
          id: action.task.id,
          listId: action.task.listId,
          description: action.task.description,
        },
      },
    };
  case task.REMOVING_TASK:
    return {
      ...state,
    };
  case task.TASK_REMOVED:
    return {
      ...state,
      data: _.omit(state.data, action.id),
    };
  case task.REQUEST_TASKS:
    return {
      ...state,
      isFetching: true,
    };
  case task.RECEIVE_TASKS:
    return {
      ...state,
      isFetching: false,
      data: action.tasks,
    };
  default:
    return state;
  }
}

const initialState = {
  lists: {
    data: {},
    isFetching: false,
  },
  tasks: {
    data: {},
    isFetching: false,
  },
};

function rootReducer(state = initialState, action) {
  return {
    lists: lists(state.lists, action),
    tasks: tasks(state.tasks, action),
  };
}

export default rootReducer;
