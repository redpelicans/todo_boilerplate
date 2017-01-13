import {
  ADD_TASK,
  DELETE_TASK,
} from '../actions';

const tasksReducer = (state = {}, action) => {
  switch (action.type) {
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

export default tasksReducer;
