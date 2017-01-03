/*
*   All the actions,
*   state = [todo1, todo2, todo3, ...]
*   todo = {
*     id: Number,
*     title: String,
*     checked: boolean,
*     tasks: Array
*   }
*   tasks = {
*     id: Number,
*     title: String,
*     Checked: boolean,
*   }
*/

let taID = 9;
let toID = 2;

export const createTodo = title => (state) => {
  const newTodo = {
    checked: false,
    id: toID += 1,
    tasks: [],
    title,
  };
  return [...state, newTodo];
};

export const removeTodo = id => state => state.filter(el => el.id !== id);

export const addTask = payload => state => state.map((todo) => {
  if (todo.id === payload.todoID) {
    const newTask = {
      title: payload.title,
      checked: false,
      id: taID += 1,
    };
    return { ...todo, tasks: [...todo.tasks, newTask] };
  }
  return todo;
});

/*
*   seems ok
*/
export const removeTask = payload => state => state.map((todo) => {
  if (todo.id === payload.todoID) {
    const newTasks = todo.tasks.filter(task => task.id !== payload.taskID);
    return { ...todo, tasks: newTasks };
  }
  return todo;
});

export const updateTask = payload => state => state.map((todo) => {
  if (todo.id === payload.todoID) {
    const newTasks = todo.tasks.map((task) => {
      if (task.id === payload.taskID) {
        return {
          title: payload.title,
          checked: payload.checked,
          id: task.id,
        };
      }
      return task;
    });
    return { ...todo, tasks: newTasks };
  }
  return todo;
});
