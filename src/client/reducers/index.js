import {
  ADD_TODO,
  // ADD_TASK,
} from '../actions';

const todosReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_TODO:
      const { todo } = action;
      const newState = { ...state };
      newState.todos = {
        ...newState.todos,
        [todo.id]: { ...todo },
      };
      return newState;
    // case ADD_TASK:
      // const { todo } = action;
      // const newState = { ...state };
      // newState.todos = {
      //   ...newState.todos,
      //   [todo.id]: { ...todo },
      // };
    default: return state;
  }
};

export default todosReducer;
