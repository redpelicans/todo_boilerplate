import { requestJson } from '../../../utils';

export const TODO_ADDED = 'todo/todoAdded';
export const TODO_DELETED = 'todo/todoDeleted';
export const TODOS_LOADED = 'todo/todosLoaded';
export const TASK_ADDED = 'task/taskAdded';
export const TASK_DELETED = 'task/deleteTask';
export const TASKS_LOADED = 'task/tasksLoaded';
export const TOGGLE_COMPLETED = 'task/toggleCompleted';

// ----------------------- TASKS -----------------------------

const tasksLoaded = tasks => ({
  type: TASKS_LOADED,
  payload: tasks,
});

export const loadTasks = () => (dispatch) => {
  const uri = 'api/todo/tasks';
  requestJson(uri).then(todos => dispatch(tasksLoaded(todos)));
};

const taskAdded = task => ({
  type: TASK_ADDED,
  payload: task,
});

const addTask = (description, listId) => (dispatch) => {
  const uri = 'api/todo/tasks';
  const body = { task: { description, listId } };
  const options = { method: 'post', body };
  requestJson(uri, options).then(task => dispatch(taskAdded(task)));
};

export const taskDeleted = task => ({
  type: TASK_DELETED,
  payload: task,
});

export const deleteTask = taskId => (dispatch) => {
  const uri = `api/todo/task/${taskId}`;
  const options = { method: 'DELETE' };
  return requestJson(uri, options).then(task => dispatch(taskDeleted(task)));
};

// ----------------------- TODOS -----------------------------

const todosLoaded = todos => ({
  type: TODOS_LOADED,
  payload: todos,
});

export const loadTodos = () => (dispatch) => {
  const uri = 'api/todo/lists';
  requestJson(uri).then(todos => dispatch(todosLoaded(todos)));
};

const todoAdded = todo => ({
  type: TODO_ADDED,
  payload: todo,
});

export const addTodo = title => (dispatch) => {
  const uri = 'api/todo/lists';
  const body = { todo: { label: title } };
  const options = { method: 'post', body };
  requestJson(uri, options).then(todo => dispatch(todoAdded(todo)));
};

const todoDeleted = todo => ({
  type: TODO_DELETED,
  payload: todo,
});

export const deleteTodo = id => (dispatch, getState) => {
  const { tasks } = getState();
  const uri = `api/todo/list/${id}`;
  const options = { method: 'DELETE' };
  const filtered = tasks.filter(task => task.listId === id);
  const tasksPromises = filtered.map(task => deleteTask(task.id)(dispatch));
  // requestJson(uri, options).then(todo => dispatch(todoDeleted(todo)));
  // Promise.all([requestJson(uri, options), ...tasksPromises])
  //   .then(todo => dispatch(todoDeleted(todo)));
  Promise.resolve([...tasksPromises])
    .then(requestJson(uri, options)
    .then(todo => dispatch(todoDeleted(todo))));
};

export const toggleCompleted = (IDtodo, task) => ({
  type: TOGGLE_COMPLETED,
  idTodo: IDtodo,
  task,
});

export default {
  addTodo,
  deleteTodo,
  addTask,
  deleteTask,
  toggleCompleted,
  todosLoaded,
  tasksLoaded,
};
