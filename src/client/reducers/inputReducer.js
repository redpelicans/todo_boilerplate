/**
 * Created by Antoine on 19/07/2016.
 */
import { INPUT_LIST, ADD_LIST } from '../actions/lists'

export default function input(state = {}, action) {
  switch (action.type) {
  case ADD_LIST:
    return { lists: '' };

  case INPUT_LIST:
    return { lists: action.input };

  default:
    return state;
  }
}
