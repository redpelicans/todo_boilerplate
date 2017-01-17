import requestJson from '../utils';

export const ADD_TASK = 'tasks/addTask';
export const DEL_TASK = 'tasks/delTask';
export const UPDATE_TASK = 'tasks/updateTask';
export const TOGGLE_TASK = 'tasks/toggleTask';
export const TASKS_LOADED = 'tasks/loadedTasks';

export const addTask = (description, listId) => ({
  type: ADD_TASK,
  payload: { description, listId, isCompleted: false },
});

export const delTask = id => ({
  type: DEL_TASK,
  payload: { id },
});

export const updateTask = (id, description) => ({
  type: UPDATE_TASK,
  payload: { id, description },
});

export const toggleTask = id => ({
  type: TOGGLE_TASK,
  payload: { id },
});

const tasksLoaded = tasks => ({
  type: TASKS_LOADED,
  payload: tasks,
});

export const loadTasks = () => (dispatch) => {
  const uri = 'api/todo/tasks';
  requestJson(uri).then(tasks => dispatch(tasksLoaded(tasks)));
};

export default { addTask, delTask, updateTask, toggleTask };
