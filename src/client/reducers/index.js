import _ from 'lodash';
import {
  ADD_LIST,
  REMOVE_LIST,
  ADD_TASK,
  REMOVE_TASK,
  LIST_INPUT,
  TASK_INPUT,
} from '../actions';

function lists(state = {}, action) {
  switch (action.type) {
    case ADD_LIST:
      return {
        ...state,
        [action.id]: {
          id: action.id,
          title: action.title,
          newTaskText: '',
        },
      };
    case REMOVE_LIST:
      return _.omit(state, action.id);
    case TASK_INPUT:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          newTaskText: action.value,
        },
      };
    default:
      return  state;
  }
}

function tasks(state = {}, action) {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        [action.id]: {
          id: action.id,
          listId: action.listId,
          text: action.text,
        },
      };
    case REMOVE_TASK:
      return _.omit(state, action.id);
    default:
      return  state;
  }
}

function input(state = '', action) {
  if (action.type === LIST_INPUT) {
    return action.value;
  }
  return state;
}

const initialState = {
  lists: {},
  tasks: {},
  input: '',
};

function rootReducer(state = initialState, action) {
  return {
    lists: lists(state.lists, action),
    tasks: tasks(state.tasks, action),
    input: input(state.input, action),
  };
}

export default rootReducer;
