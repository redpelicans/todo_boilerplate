import { requestJson } from '../../../utils';

export const TODO_ADDED = 'todo/todoAdded';
export const DELETE_TODO = 'todo/deleteTodo';
export const TODOS_LOADED = 'todo/todosLoaded';
export const TASK_ADDED = 'task/taskAdded';
export const DELETE_TASK = 'task/deleteTask';
export const TASKS_LOADED = 'task/tasksLoaded';
export const TOGGLE_COMPLETED = 'task/toggleCompleted';

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
  todo,
});

const addTodo = title => (dispatch) => {
  const uri = 'api/todo/lists';
  const body = { todo: { label: title } };
  const options = { method: 'post', body };
  requestJson(uri, options).then(todo => dispatch(todoAdded(todo)));
};

export const deleteTodo = IDtodo => ({
  type: DELETE_TODO,
  id: IDtodo,
});

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
  task,
});

const addTask = (description, listId) => (dispatch) => {
  const uri = 'api/todo/tasks';
  const body = { task: { description, listId } };
  const options = { method: 'post', body };
  requestJson(uri, options).then(task => dispatch(taskAdded(task)));
};

export const deleteTask = (IDtodo, IDtask) => ({
  type: DELETE_TASK,
  idTodo: IDtodo,
  idTask: IDtask,
});

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
