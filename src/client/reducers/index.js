import { combineReducers } from 'redux';
import lists from './lists';
import tasks from './tasks';
import status from './status';

const rootReducer = combineReducers({
  lists,
  tasks,
  status,
});

export default rootReducer;
