import { CHANGE_LIST, LIST_ADDED } from '../actions/list';
import { CHANGE_TASK, TASK_ADDED } from '../actions/task';

export default function inputs(state = { inputTask: '', inputList: '' }, action) {
  switch (action.type) {
  case LIST_ADDED:
    return {
      ...state,
      inputList: '',
    };
  case TASK_ADDED:
    return {
      ...state,
      inputTask: '',
    };
  case CHANGE_TASK:
    return {
      ...state,
      inputTask: action.inputtask,
    };
  case CHANGE_LIST:
    return {
      ...state,
      inputList: action.inputlist,
    };
  default:
    return state;
  }
}
