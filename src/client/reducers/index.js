import { combineReducers } from 'redux';
import todoFetching from './todofetching';
import todoLists from './todolists';
import todoTasks from './todotasks';

const todo = combineReducers({
  isFetching: todoFetching,
  lists: todoLists,
  tasks: todoTasks });

export default todo;
