/**
 * Created by Antoine on 19/07/2016.
 */
import _ from 'lodash'
import { INPUT_LIST } from '../actions/input'
import { ADD_LIST } from '../actions/lists'

export default function input(state = {}, action) {
  switch (action.type) {
  	case ADD_LIST:
  		return {lists: '', tasks: state.tasks};

  	case INPUT_LIST:
    	return {lists: action.input, tasks: state.tasks};

    default:
		return state;
  }
}
