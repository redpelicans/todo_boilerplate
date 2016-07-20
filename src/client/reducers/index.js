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
    case LIST_INPUT:
      return {
        input: action.value,
        data: { ...state.data },
      };
    case ADD_LIST:
      return {
        input: '',
        data: {
          ...state.data,
          [action.id]: {
            id: action.id,
            title: action.title,
            newTaskText: '',
          },
        },
      };
    case REMOVE_LIST:
      return {
        input: state.input,
        data: _.omit(state.data, action.id),
      };
    case TASK_INPUT:
      return {
        input: state.input,
        data: {
          ...state.data,
          [action.id]: {
            ...state.data[action.id],
            newTaskText: action.value,
          },
        },
      };
    case ADD_TASK:
      return {
        input: state.input,
        data: {
          ...state.data,
          [action.listId]: {
            ...state.data[action.listId],
            newTaskText: '',
          },
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

const initialState = {
  lists: {
    input: '',
    data: {},
  },
  tasks: {},
};

function rootReducer(state = initialState, action) {
  return {
    lists: lists(state.lists, action),
    tasks: tasks(state.tasks, action),
  };
}

export default rootReducer;
