// import store from './index';

let todoId = 2;
let taskId = 4;

const actions = {
  addTodo(name) {
    return (state) => {
      console.log('Launch action AddTodo()');
      const newTodo = { id: ++todoId, name, tasks: {} };
      return { ...state, [newTodo.id]: newTodo };
    };
  },
  // deleteTodo(id) {
  //   /* delete thisIsObject[key] */
  //   const { state: todos } = store;
  //   return () => {
  //     console.log('Launch action deleteTodo()');
  //     console.log(store);
  //     console.log(todos);
  //     Object.values(todos).filter(todo => todo.id !== id);
  //     console.log(todos);
  //   };
  // },
  addTask(name) {
    return (state) => {
      console.log('Launch action AddTask()');
      console.log(newName);
      const newTask = { id: (taskId += 1), name };
      return { ...state, [newTask.id]: newTask };
    };
  },
};


export default actions;
