import requestJson from '../utils';

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
  const options = { method: 'POST', body };
  requestJson(uri, options).then(todo => dispatch(todoAdded(todo)));
};

export const todoDeleted = todo => ({
  type: TODO_DELETED,
  payload: todo,
});

const delTodo = id => (dispatch) => {
  const uri = `api/todo/list/${id}`;
  const options = { method: 'DELETE' };
  requestJson(uri, options).then(todo => dispatch(todoDeleted(todo)));
};

const todosLoaded = todos => ({
  type: TODOS_LOADED,
  payload: todos,
});

export const loadTodos = () => (dispatch) => {
  const uri = 'api/todo/lists';
  requestJson(uri).then(todos => dispatch(todosLoaded(todos)));
};

export default { addTodo, delTodo };
