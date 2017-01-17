import requestJson from '../utils';

export const ADD_TODO = 'todos/addTodo';
export const DEL_TODO = 'todos/delTodo';
export const TODOS_LOADED = 'todos/todosLoaded';

export const addTodo = label => ({
  type: ADD_TODO,
  payload: { label },
});

export const delTodo = id => ({
  type: DEL_TODO,
  payload: { id },
});

const todosLoaded = todos => ({
  type: TODOS_LOADED,
  payload: todos,
});

export const loadTodos = () => (dispatch) => {
  const uri = 'api/todo/lists';
  requestJson(uri).then(todos => dispatch(todosLoaded(todos)));
};

export default { addTodo, delTodo };
