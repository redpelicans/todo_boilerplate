import _ from 'lodash';
import {
  ADD_LIST,
  REMOVE_LIST,
  ADD_TASK,
  REMOVE_TASK,
  LIST_INPUT,
  TASK_INPUT,
} from '../actions';

function lists(state = { data: {}, input: '', isFetching: false }, action) {
  switch (action.type) {
  case LIST_INPUT:
    return {
      ...state,
      input: action.value,
    };
  case ADD_LIST:
    return {
      ...state,
      input: '',
      data: {
        ...state.data,
        [action.id]: {
          id: action.id,
          title: state.input,
        },
      },
    };
  case REMOVE_LIST:
    return {
      ...state,
      data: _.omit(state.data, action.id),
    };
  default:
    return state;
  }
}

function tasks(state = { data: {}, input: {}, isFetching: false }, action) {
  switch (action.type) {
  case ADD_LIST:
    return {
      ...state,
      input: {
        ...state.input,
        [action.id]: '',
      },
    };
  case TASK_INPUT:
    return {
      ...state,
      input: {
        ...state.input,
        [action.id]: action.value,
      },
    };
  case ADD_TASK:
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
  case REMOVE_TASK:
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
