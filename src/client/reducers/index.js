import { ADD_LIST, REMOVE_LIST, REMOVED_LIST, CHANGE_LIST, LIST_ADDED, ADDING_LIST } from '../actions/list';
import { ADD_TASK, CHANGE_TASK, REMOVED_TASK, TASK_ADDED, ADDING_TASK } from '../actions/task';
import { MAKE_LISTS, MAKE_TASKS } from '../actions/fetch';
import _ from 'lodash';

const initialState = {
  lists: {},
  tasks: {},
  inputlist: '',
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
  case LIST_ADDED:
    return {
      ...state,
      lists: {
        ...state.lists,
        [action.list.id]: {
          id: action.list.id,
          title: action.list.label,
          inputtask: '',
        },
      },
    };
  case ADDING_LIST:
    return {
      ...state,
      inputlist: '',
    };
  case TASK_ADDED:
    return {
      ...state,
      tasks: {
        ...state.tasks,
        [action.task.id]: {
          id: action.task.id,
          listId: action.task.listId,
          description: action.task.description,
        },
      },
      lists: {
        ...state.lists,
        [action.task.listId]: {
          ...state.lists[action.task.listId],
          inputtask: '',
        },
      },
    };
  case REMOVED_LIST:
    return {
      ...state,
      lists: (_.omit(state.lists, action.idList)),
      tasks: (_.reject(state.tasks, { 'idList': action.idList })),
    };
  case REMOVED_TASK:
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
  case MAKE_LISTS:
    return {
      ...state,
      lists: action.lists,
    };
  case MAKE_TASKS:
    return {
      ...state,
      tasks: action.tasks,
  };
}
}
