import requestJson from '../utils';
import { tasksSelector } from '../selectors/';
import { delTask } from './tasks';

export const TODO_ADDED = 'todos/todoAdded';
export const TODO_DELETED = 'todos/delTodo';
export const TODOS_LOADED = 'todos/todosLoaded';

export const todoAdded = todo => ({
  type: TODO_ADDED,
  payload: todo,
});

const addTodo = label => (dispatch) => {
  const uri = 'api/todo/lists';
  const body = { todo: { label } };
  const options = { method: 'POST', body, dispatch };
  requestJson(uri, options).then(todo => dispatch(todoAdded(todo)));
};

export const todoDeleted = todo => ({
  type: TODO_DELETED,
  payload: todo,
});

const delTodo = id => (dispatch, getState) => {
  const uri = `api/todo/list/${id}`;
  const options = { method: 'DELETE', dispatch };
  const state = getState();
  const tasks = tasksSelector(state)[id] || [];
  const tasksPromises = tasks.map(task => delTask(task.id)(dispatch));
  Promise.all([requestJson(uri, options), ...tasksPromises])
    .then(values => dispatch(todoDeleted(values[0])));
};

const todosLoaded = todos => ({
  type: TODOS_LOADED,
  payload: todos,
});

export const loadTodos = () => (dispatch) => {
  const uri = 'api/todo/lists';
  const options = { dispatch };
  requestJson(uri, options).then(todos => dispatch(todosLoaded(todos)));
};

export default { addTodo, delTodo };
