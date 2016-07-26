import _ from 'lodash';
import * as list from '../actions/lists';
import * as task from '../actions/tasks';

function lists(state = { data: {}, input: '', isFetching: false }, action) {
  switch (action.type) {
  case list.LIST_INPUT:
    return {
      ...state,
      input: action.value,
    };
  case list.ADDING_LIST:
    return {
      ...state,
      input: '',
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
  case list.REMOVE_LIST:
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

function tasks(state = { data: {}, input: {}, isFetching: false }, action) {
  switch (action.type) {
  case list.ADD_LIST:
    return {
      ...state,
      input: {
        ...state.input,
        [action.id]: '',
      },
    };
  case task.TASK_INPUT:
    return {
      ...state,
      input: {
        ...state.input,
        [action.id]: action.value,
      },
    };
  case task.ADD_TASK:
    return {
      ...state,
      input: {
        ...state.input,
        [action.listId]: '',
      },
      data: {
        ...state.data,
        [action.id]: {
          id: action.id,
          listId: action.listId,
          text: state.input[action.listId],
        },
      },
    };
  case task.REMOVE_TASK:
    return {
      ...state,
      data: _.omit(state.data, action.id),
    };
  default:
    return state;
  }
}

const initialState = {
  lists: {
    input: '',
    data: {},
    isFetching: false,
  },
  tasks: {
    input: {},
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
