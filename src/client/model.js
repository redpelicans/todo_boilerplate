const filterCompletedTodos = (todos, tasks) =>
  todos.filter(todo =>
    tasks.some(task => task.todoId === todo.id && task.isChecked === false) ||
    tasks.length === 0
  );

const sortTodos = todos =>
  todos.sort((t1, t2) => t1.title - t2.title);

const filterTodos = (todos, tasks, mode) => {
  let filtered = [...todos];
  filtered = (mode.showCompletedTodos) ? filtered : filterCompletedTodos(filtered, tasks);
  filtered = sortTodos(filtered);
  filtered = (mode.sortByAsc) ? filtered : filtered.reverse();
  return filtered;
};

const matchTasksWithTodo = (tasks, todo) =>
tasks.filter(task => task.todoId === todo.id);

export { matchTasksWithTodo, filterTodos };
