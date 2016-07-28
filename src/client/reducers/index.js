import { combineReducers } from 'redux';
import lists from './lists';
import tasks from './tasks';
import status from './status';
import _ from 'lodash';

const rootReducer = combineReducers({
  lists,
  tasks,
  status,
})

export default rootReducer;
