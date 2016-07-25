import _ from 'lodash';
import {
  ADD_LIST,
  REMOVE_LIST,
  ADD_TASK,
  REMOVE_TASK,
  LIST_INPUT,
  TASK_INPUT,
} from '../actions';

function lists(state = { data: {}, input: '' }, action) {
  switch (action.type) {
  case LIST_INPUT:
    return {
      input: action.value,
      data: state.data,
    };
  case ADD_LIST:
    return {
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
      input: state.input,
      data: _.omit(state.data, action.id),
    };
  default:
    return state;
  }
}

function tasks(state = { data: {}, input: {} }, action) {
  switch (action.type) {
  case ADD_LIST:
    return {
      input: {
        ...state.input,
        [action.id]: '',
      },
      data: state.data,
    };
  case TASK_INPUT:
    return {
      input: {
        ...state.input,
        [action.id]: action.value,
      },
      data: state.data,
    };
  case ADD_TASK:
    return {
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
      input: state.input,
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
  },
  tasks: {
    input: {},
    data: {},
  },
};

function rootReducer(state = initialState, action) {
  return {
    lists: lists(state.lists, action),
    tasks: tasks(state.tasks, action),
  };
}

export default rootReducer;
