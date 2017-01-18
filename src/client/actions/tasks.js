import requestJson from '../utils';

export const TASK_ADDED = 'tasks/taskAdded';
export const TASK_DELETED = 'tasks/taskDeleted';
export const TASK_UPDATED = 'tasks/taskUpdated';
export const TASK_TOGGLED = 'tasks/taskToggled';
export const TASKS_LOADED = 'tasks/tasksLoaded';

export const taskAdded = task => ({
  type: TASK_ADDED,
  payload: task,
});

export const addTask = (description, listId) => (dispatch) => {
  const uri = 'api/todo/tasks';
  const body = { task: { description, listId, isCompleted: false } };
  const options = { method: 'POST', body };
  requestJson(uri, options).then(task => dispatch(taskAdded(task)));
};

export const taskDeleted = task => ({
  type: TASK_DELETED,
  payload: task,
});

export const delTask = id => (dispatch) => {
  const uri = `api/todo/task/${id}`;
  const options = { method: 'DELETE' };
  return requestJson(uri, options).then(task => dispatch(taskDeleted(task)));
};

export const taskUpdated = task => ({
  type: TASK_UPDATED,
  payload: task,
});

export const updateTask = task => (dispatch) => {
  const uri = 'api/todo/tasks';
  const body = { task };
  const options = { method: 'PUT', body };
  requestJson(uri, options).then(updated => dispatch(taskUpdated(updated)));
};

export const taskToggled = task => ({
  type: TASK_TOGGLED,
  payload: task,
});

export const toggleTask = task => (dispatch) => {
  const uri = 'api/todo/tasks';
  const body = { task: { ...task, isCompleted: !task.isCompleted } };
  const options = { method: 'PUT', body };
  requestJson(uri, options).then(updated => dispatch(taskUpdated(updated)));
};

export const tasksLoaded = tasks => ({
  type: TASKS_LOADED,
  payload: tasks,
});

export const loadTasks = () => (dispatch) => {
  const uri = 'api/todo/tasks';
  requestJson(uri).then(tasks => dispatch(tasksLoaded(tasks)));
};

export default { addTask, delTask, updateTask, toggleTask };
