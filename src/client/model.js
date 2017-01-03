const getTasksByTodoId = (tasks, todoId) =>
  tasks.filter(task => task.todoId === todoId);

export default getTasksByTodoId;
