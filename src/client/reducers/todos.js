import { ADD_TODO, DEL_TODO, TODOS_LOADED } from '../actions/todos';

let todoId = 3;

const todos = (state = [], action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_TODO:
      return state.concat([{ id: (todoId += 1), ...payload }]);
    case DEL_TODO:
      return state.filter(todo => todo.id !== payload.id);
    case TODOS_LOADED:
      return [...state, ...action.payload];
    default:
      return state;
  }
};

export default todos;
