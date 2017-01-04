const filterTasksByTodoId = (tasks, todoId) =>
  tasks.filter(task => task.todoId === todoId);

const filterTodosByMode = (todos, tasks, showCompleted = true) =>
  todos.filter(todo =>
    showCompleted === true ||
    filterTasksByTodoId(tasks, todo.id).some(task =>
      task.isChecked === false) ||
    filterTasksByTodoId(tasks, todo.id).length === 0
    );

export { filterTasksByTodoId, filterTodosByMode };
