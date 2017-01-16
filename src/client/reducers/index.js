import {
  ADD_TODO,
  DELETE_TODO,
  ADD_TASK,
  DELETE_TASK,
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
    case ADD_TASK: {
      const { task, id } = action;
      const newStateAddTask = { ...state };
      newStateAddTask.todos = {
        ...newStateAddTask.todos,
        [id]: { ...state.todos[id],
          tasks: { ...state.todos[id].tasks, [task.id]: { ...task, checked: false } } },
      };
      return newStateAddTask;
    }
    case DELETE_TASK: {
      const { todos: todos2del } = state;
      const { idTodo, idTask } = action;
      const newTasks = {};
      const tasks = Object.values(todos2del[idTodo].tasks);
      tasks.forEach((task2save) => {
        if (task2save.id !== idTask) {
          newTasks[task2save.id] = task2save;
        }
      });
      const newState = { ...state };
      newState.todos = {
        ...newState.todos,
        [idTodo]: { ...state.todos[idTodo],
          tasks: newTasks,
        },
      };
      return newState;
    }
    default: return state;
  }
};

export default todosReducer;
