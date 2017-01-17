import {
  TODO_CREATED,
  TODO_REMOVED,
  TODO_UPDATED,
  INITIAL_TODOS_LOADED,
} from '../actions/todos';

const updateTodo = (state, payload) => state.map((todo) => {
  if (todo.id === payload.id) {
    return { ...payload };
  }
  return todo;
});

export default (state = [], action) => {
  switch (action.type) {
    case INITIAL_TODOS_LOADED:
      return action.payload;
    case TODO_CREATED:
      return [...state, action.payload];
    case TODO_REMOVED:
      return state.filter(todo => todo.id !== action.payload.id);
    case TODO_UPDATED:
      return updateTodo(state, action.payload);
    default: return state;
  }
};
