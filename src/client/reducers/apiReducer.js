/**
 * Created by Antoine on 19/07/2016.
 */
import { ADD_LIST, DEL_LIST, GOT_LISTS } from '../actions/lists'
import { ADD_TASK, DEL_TASK, GOT_TASKS } from '../actions/tasks'
import { LISTS, TASKS, IDLE, BUSY } from '../actions/api'

export default function input(state = {}, action) {
  switch (action.type) {

  case BUSY:
    if (action.what === LISTS) { return { ...state, lists: BUSY } }
    if (action.what === TASKS) { return { ...state, tasks: BUSY } }

// LIST options
  case ADD_LIST:
  case DEL_LIST:
  case GOT_LISTS:
    return { ...state, lists: IDLE }

// TASK options
  case ADD_TASK:
  case DEL_TASK:
  case GOT_TASKS:
    return { ...state, tasks: IDLE }

  default:
    return state
  }
}
