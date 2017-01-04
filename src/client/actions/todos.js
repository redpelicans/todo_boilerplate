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

/*
*   payload = {
*     title: String,
*     todoID: Number
*   }
*/
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
*   payload = {
*     todoID: Number,
*     taskID: Number,
*   }
*/
export const removeTask = payload => state => state.map((todo) => {
  if (todo.id === payload.todoID) {
    const newTasks = todo.tasks.filter(task => task.id !== payload.taskID);
    return { ...todo, tasks: newTasks };
  }
  return todo;
});

/*
*  payload = {
*    todoID: Number,
*    title: String (optional),
*    checked: Boolean (optional),
*  }
*/
export const updateTodo = payload => state => state.map((todo) => {
  if (todo.id === payload.todoID) {
    return {
      ...todo,
      title: payload.title || todo.title,
      checked: payload.checked || todo.checked,
    };
  }
  return todo;
});

/*
*  payload = {
*    todoID: Number,
*    taskID: Number,
*    title: String (optional),
*    checked: Boolean (optional),
*  }
*/
export const updateTask = payload => state => state.map((todo) => {
  if (todo.id === payload.todoID) {
    const newTasks = todo.tasks.map((task) => {
      if (task.id === payload.taskID) {
        return {
          ...task,
          title: payload.title || task.title,
          checked: payload.checked !== undefined ? payload.checked : task.checked,
        };
      }
      return task;
    });
    return { ...todo, tasks: newTasks };
  }
  return todo;
});
