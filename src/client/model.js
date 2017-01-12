const matchTasksWithTodo = (tasks, todo) =>
  tasks.filter(task => task.todoId === todo.id);

const filterCompletedTodos = (todos, tasks) =>
  todos.filter((todo) => {
    const todoTasks = matchTasksWithTodo(tasks, todo);
    return todoTasks.some(task => task.isChecked === false) || todoTasks.length === 0;
  });

const sortTodos = todos =>
  todos.sort((t1, t2) => t1.title - t2.title);

const filterTodos = (todos, tasks, options) => {
  let filtered = [...todos];
  filtered = (options.showCompleted) ? filtered : filterCompletedTodos(filtered, tasks);
  filtered = sortTodos(filtered);
  filtered = (options.sortByAsc) ? filtered : filtered.reverse();
  return filtered;
};

export { matchTasksWithTodo, filterTodos };
