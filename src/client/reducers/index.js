import {
  ADD_TODO,
  DELETE_TODO,
  ADD_TASK,
  DELETE_TASK,
  TOGGLE_COMPLETED,
} from '../actions';

export const todosReducer = (state = {}, action) => {
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
      Object.keys(todos).forEach((id) => {
        if (id !== String(action.id)) {
          newTodo[id] = todos[id];
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
