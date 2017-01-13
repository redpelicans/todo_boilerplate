import { combineReducers } from 'redux';
import todos from './todos_reducer';
import tasks from './tasks_reducer';

const rootReducer = combineReducers({ todos, tasks });

export default rootReducer;
