import _ from 'lodash';
import { ADD_TASK, REMOVE_TASK } from '../actions/tasks';

function tasks(state = {}, action) {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        [action.id]: {
          text: action.text,
        },
      };
    case REMOVE_TASK:
      return _.omit(state, action.id);
    default:
      return  state;
  }
}

export default tasks;
