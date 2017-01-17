import { ADD_TASK, DEL_TASK, UPDATE_TASK, TOGGLE_TASK, TASKS_LOADED } from '../actions/tasks';
import { DEL_TODO } from '../actions/todos';

let taskId = 5;

const tasks = (state = [], action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_TASK:
      return state.concat({ id: (taskId += 1), ...payload });
    case DEL_TASK:
      return state.filter(task => task.id !== payload.id);
    case UPDATE_TASK:
      return state.map(task =>
        ((task.id === payload.id) ? { ...task, description: payload.description } : task));
    case TOGGLE_TASK:
      return state.map(task =>
        ((task.id === payload.id) ? { ...task, isCompleted: !task.isCompleted } : task));
    case DEL_TODO:
      return state.filter(task => task.listId !== payload.id);
    case TASKS_LOADED:
      return [...state, ...action.payload];
    default:
      return state;
  }
};

export default tasks;
