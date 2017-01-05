const actions = {
  addTodo(name) {
    console.log('add todo ', name); // eslint-disable-line no-console
    return state => ({
      ...state,
      todos: state.todos.concat({
        title: name,
        id: state.todos[state.todos.length - 1].id + 1,
      }),
    });
  },
  delTodo(id) {
    console.log('del todo ', id); // eslint-disable-line no-console
    return state => ({
      ...state,
      todos: state.todos.filter(todo => todo.id !== id),
      tasks: state.tasks.filter(task => task.todoId !== id),
    });
  },
  addTask(task) {
    console.log('add task ', task); // eslint-disable-line no-console
    return state => ({
      ...state,
      tasks: state.tasks.concat({
        ...task,
        id: state.tasks[state.tasks.length - 1].id + 1,
        isChecked: false,
      }),
    });
  },
  updateTask(updated) {
    console.log('update task ', updated.id); // eslint-disable-line no-console
    return state => ({
      ...state,
      tasks: state.tasks.map(task => ((task.id === updated.id) ? updated : task)),
    });
  },
  delTask(id) {
    console.log('del task ', id); // eslint-disable-line no-console
    return state => ({
      ...state,
      tasks: state.tasks.filter(task => task.id !== id),
    });
  },
  switchMode() {
    console.log('switch mode'); // eslint-disable-line no-console
    return state => ({
      ...state,
      showCompletedTodos: !state.showCompletedTodos,
    });
  },
};

export default actions;
