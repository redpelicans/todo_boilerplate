export const ADD_TODO = 'todo/addTodo';
export const DELETE_TODO = 'todo/deleteTodo';
export const ADD_TASK = 'task/addTask';
export const DELETE_TASK = 'task/deleteTask';

let todoId = 2;
let taskId = 4;

export const addTodo = name => ({
  type: ADD_TODO,
  todo2add: { id: (todoId += 1), name, tasks: {} },
});

export const deleteTodo = IDtodo => ({
  type: DELETE_TODO,
  id: IDtodo,
});

export const addTask = (name, IDtodo) => ({
  type: ADD_TASK,
  id: IDtodo,
  task: { id: (taskId += 1), name },
});

export const deleteTask = (IDtodo, IDtask) => ({
  type: DELETE_TASK,
  idTodo: IDtodo,
  idTask: IDtask,
});

export default {
  addTodo,
  deleteTodo,
  addTask,
  deleteTask,
};
