import {
  ADD_TODO,
  DELETE_TODO,
} from '../actions';

const todosReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_TODO: {
      const { todo2add } = action;
      const newStateAddTodo = { ...state };
      newStateAddTodo.todos = {
        ...newStateAddTodo.todos,
        [todo2add.id]: { ...todo2add },
      };
      return newStateAddTodo;
    }
    case DELETE_TODO: {
      const newTodo = {};
      const { todos } = state;
      const todoList = Object.values(todos);
      todoList.forEach((todo) => {
        if (todo.id !== action.id) {
          newTodo[todo.id] = todo;
        }
      });
      const newStateDel = { ...state, todos: newTodo };
      return newStateDel;
    }
    default: return state;
  }
};

export default todosReducer;
