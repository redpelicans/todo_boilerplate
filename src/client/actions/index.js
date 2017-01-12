export const ADD_TODO = 'todo/addTodo';
export const ADD_TASK = 'todo/addTask';

let todoId = 2;
let taskId = 4;

export const addTodo = name => ({
  type: ADD_TODO,
  todo: { id: (todoId += 1), name, tasks: {} },
});

export const addTask = name => ({
  type: ADD_TASK,
  task: { id: (taskId += 1), name },
});

export default {
  addTodo,
  addTask,
};
