import {
  TODO_ADDED,
  DELETE_TODO,
  TASKS_LOADED,
  TODOS_LOADED,
  TASK_ADDED,
  DELETE_TASK,
  TOGGLE_COMPLETED,
} from '../actions';

export const todosReducer = (state = {}, action) => {
  switch (action.type) {
    case TODO_ADDED:
      return { ...state, todos: [...state.todos, action.todo] };
    case DELETE_TODO: {
      const newTodo = {};
      const { todos } = state;
      Object.keys(todos).forEach((id) => {
        if (id !== String(action.id)) {
          newTodo[id] = todos[id];
        }
      });
      const newStateDel = { ...state, todos: newTodo };
      return newStateDel;
    }
    case TODOS_LOADED: {
      return { ...state, todos: action.payload };
    }
    case TASK_ADDED: {
      return { ...state, tasks: [...state.tasks, action.task] };
    }
    case DELETE_TASK: {
      const { todos } = state;
      const { idTodo, idTask } = action;
      const { tasks } = todos[idTodo];
      const newTasks = {};
      Object.keys(tasks).forEach((id) => {
        if (id !== String(idTask)) {
          newTasks[id] = tasks[id];
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
    case TASKS_LOADED:
      return { ...state, tasks: action.payload };
    case TOGGLE_COMPLETED: {
      const { idTodo, task } = action;
      // console.log('checkd?:    ', task.checked);
      const newStateToggle = { ...state };
      if (state.todos[idTodo].tasks[task.id].checked) {
        newStateToggle.todos[idTodo].tasks[task.id].checked =
          !newStateToggle.todos[idTodo].tasks[task.id].checked;
      } else {
        newStateToggle.todos[idTodo].tasks[task.id].checked =
          !newStateToggle.todos[idTodo].tasks[task.id].checked;
      }
      // console.log('checkd?:    ', task.checked);
      return newStateToggle;
    }
    default: return state;
  }
};

export default todosReducer;
