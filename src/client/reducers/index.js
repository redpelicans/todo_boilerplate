import { combineReducers } from 'redux';
import lists from './lists';
import tasks from './tasks';
import status from './status';
import inputs from './inputs';
import { ADD_LIST, REMOVE_LIST, REMOVED_LIST, CHANGE_LIST, LIST_ADDED, ADDING_LIST, REMOVING_LIST } from '../actions/list';
import { ADD_TASK, CHANGE_TASK, REMOVED_TASK, TASK_ADDED, ADDING_TASK, REMOVING_TASK } from '../actions/task';
import { MADE_LISTS, MADE_TASKS, MAKING_TASKS, MAKING_LISTS } from '../actions/fetch';
import _ from 'lodash';

const rootReducer = combineReducers({
  lists,
  tasks,
  status,
  inputs,
})

export default rootReducer;
