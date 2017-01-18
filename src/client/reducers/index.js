import { combineReducers } from 'redux';
import todos from './todos_reducers';
import tasks from './tasks_reducers';

export default combineReducers({ todos, tasks });
