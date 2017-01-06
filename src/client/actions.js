let todoId = 2;
let taskId = 4;

const actions = {
  addTodo(name) {
    return (state) => {
      console.log('Launch action AddTodo()');
      const newTodo = { id: (todoId = todoId + 1), name, tasks: {} };
      return { ...state, [newTodo.id]: newTodo };
    };
  },
  deleteTodo(id) {
    return (state) => {
      console.log('Launch action deleteTodo()');
      const newTodo = {};
      const todos = Object.values(state);
      todos.forEach((todo) => {
        if (todo.id !== id) {
          newTodo[todo.id] = todo;
        }
      });
      return newTodo;
    };
  },
  addTask(name, TodoId) {
    return (state) => {
      console.log('Launch action AddTask()');
      const newTask = { id: (taskId = taskId + 1), name };
      const newState = { ...state };
      newState[TodoId] = {
        ...newState[TodoId],
        tasks: { ...newState[todoId].tasks, [newTask.id]: newTask },
      };
      return newState;
    };
  },
  deleteTask(TodoId, id) {
    return (state) => {
      const newTasks = {};
      const tasks = Object.values(state[TodoId].tasks);
      tasks.forEach((task) => {
        if (task.id !== id) {
          newTasks[task.id] = task;
        }
      });
      const newState = { ...state };
      newState[TodoId] = {
        ...newState[TodoId],
        tasks: newTasks,
      };
      return newState;
    };
  },
};

export default actions;
