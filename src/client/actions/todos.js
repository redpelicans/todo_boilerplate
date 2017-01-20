import requestJson from '../utils';
import { deleteTask } from './tasks';
import { addAlert } from './alert';
import state from '../mystate';

export const TODO_ADDED = 'todo/todoAdded';
export const TODO_DELETED = 'todo/todoDeleted';
export const TODOS_LOADED = 'todo/todosLoaded';

export const todosLoaded = todos => ({
  type: TODOS_LOADED,
  payload: todos,
});

const loadTodos = () => (dispatch) => {
  const uri = 'api/todo/lists';
  requestJson(uri)
    .then(todos => dispatch(todosLoaded(todos)))
    .catch((error) => {
      if (dispatch) dispatch(addAlert(`${error.type} failed !`, state.alert.id += 1));
    });
};

export const todoAdded = todo => ({
  type: TODO_ADDED,
  payload: todo,
});

const addTodo = title => (dispatch) => {
  const uri = 'api/todo/lists';
  const body = { todo: { label: title } };
  const options = { method: 'post', body, dispatch };
  requestJson(uri, options)
    .then(todo => dispatch(todoAdded(todo)))
    .then((error) => {
      if (dispatch) dispatch(addAlert(`${error.type} failed !`, state.alert.id += 1));
    });
};

export const todoDeleted = todo => ({
  type: TODO_DELETED,
  payload: todo,
});

const deleteTodo = id => (dispatch, getState) => {
  const { tasks } = getState();
  const uri = `api/todo/list/${id}`;
  const options = { method: 'DELETE', dispatch };
  const filtered = tasks.filter(task => task.listId === id);
  const tasksPromises = filtered.map(task => deleteTask(task.id)(dispatch));
  Promise.all([requestJson(uri, options), ...tasksPromises])
    .then(values => dispatch(todoDeleted(values[0])))
    .catch((error) => {
      if (dispatch) dispatch(addAlert(`${error.type} failed !`, state.alert.id += 1));
    });
};

export default {
  addTodo,
  deleteTodo,
  todosLoaded,
};
