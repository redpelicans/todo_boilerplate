export const ADD_TASK = 'tasks/addTask';
export const DEL_TASK = 'tasks/delTask';
export const UPDATE_TASK = 'tasks/updateTask';
export const TOGGLE_TASK = 'tasks/toggleTask';

const addTask = (title, todoId) => ({
  type: ADD_TASK,
  payload: { title, todoId },
});

const delTask = id => ({
  type: DEL_TASK,
  payload: { id },
});

const updateTask = (id, title) => ({
  type: UPDATE_TASK,
  payload: { id, title },
});

const toggleTask = id => ({
  type: TOGGLE_TASK,
  payload: { id },
});

export default { addTask, delTask, updateTask, toggleTask };
