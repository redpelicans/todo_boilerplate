import _ from 'lodash';
import { ADD_LIST, REMOVE_LIST } from '../actions/lists';

function lists(state = {}, action) {
  switch (action.type) {
    case ADD_LIST:
      return {
        ...state,
        [action.id]: {
          title: action.title,
          newTaskText: '',
        },
      };
    case REMOVE_LIST:
      return _.omit(state, action.id);
    default:
      return  state;
  }
}

export default lists;
