import {
  TASK_CREATED,
  TASK_UPDATED,
  TASK_REMOVED,
  INITIAL_TASKS_LOADED,
} from '../actions/tasks';

const updateTask = (state, payload) => state.map((task) => {
  if (task.id === payload.id) {
    return { ...payload };
  }
  return task;
});

export default (state = [], action) => {
  switch (action.type) {
    case INITIAL_TASKS_LOADED:
      return action.payload;
    case TASK_CREATED:
      return [...state, action.payload];
    case TASK_REMOVED:
      return state.filter(task => task.id !== action.payload.id);
    case TASK_UPDATED:
      return updateTask(state, action.payload);
    default: return state;
  }
};
