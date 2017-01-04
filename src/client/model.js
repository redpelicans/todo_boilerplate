const filterTasksByTodoId = (tasks, todoId) =>
  tasks.filter(task => task.todoId === todoId);

export default filterTasksByTodoId;
