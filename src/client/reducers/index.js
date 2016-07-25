import { ADD_LIST, REMOVE_LIST, CHANGE_LIST } from '../actions/list';
import { ADD_TASK, CHANGE_TASK, REMOVE_TASK } from '../actions/task';
import _ from 'lodash';

const initialState = {
  lists: {},
  tasks: {},
  inputlist: '',
}

export default function reducer (state = initialState, action) {
  switch (action.type) {
  case ADD_LIST:
    return {
      ...state,
      lists: {
        ...state.lists,
        [action.id]: {
          id: action.id,
          title: state.inputlist,
          inputtask: '',
        },
      },
      inputlist: '',
    };
  case ADD_TASK:
    return {
      ...state,
      tasks: {
        ...state.tasks,
        [action.idTask]: {
          id: action.idTask,
          idList: action.idList,
          task: state.lists[action.idList].inputtask,
        },
      },
      lists: {
        ...state.lists,
        [action.idList]: {
          ...state.lists[action.idList],
          inputtask: '',
        },
      },
    };
  case REMOVE_LIST:
    return {
      ...state,
      lists: (_.omit(state.lists, action.idList)),
    };
  case REMOVE_TASK:
    return {
      ...state,
      tasks: (_.omit(state.tasks, action.idTask)),
    };
  case CHANGE_TASK:
    return {
      ...state,
      lists: {
        ...state.lists,
        [action.idList]: {
          ...state.lists[action.idList],
          inputtask: action.inputtask,
        },
      },
    };
  case CHANGE_LIST:
    return {
      ...state,
      inputlist: action.inputlist,
    };
  default:
    return state;
  }
};
