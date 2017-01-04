import React from 'react';
import { render } from 'react-dom';
import App from './components/App/index';

const mockUp = {
  todos: [
    {
      id: 1,
      title: 'todo 1',
    },
    {
      id: 2,
      title: 'todo 2',
    },
    {
      id: 3,
      title: 'todo 3',
    },
  ],
  tasks: [
    {
      id: 1,
      todoId: 1,
      title: 'task 1',
      isChecked: true,
    },
    {
      id: 2,
      todoId: 1,
      title: 'task 2',
      isChecked: false,
    },
    {
      id: 3,
      todoId: 2,
      title: 'task 3',
      isChecked: true,
    },
    {
      id: 4,
      todoId: 2,
      title: 'task 4',
      isChecked: false,
    },
    {
      id: 5,
      todoId: 3,
      title: 'task 5',
      isChecked: true,
    },
  ],
};

const store = {
  state: {
    todos: mockUp.todos,
    tasks: mockUp.tasks,
    showCompletedTodos: true,
    sortByAsc: true,
  },
  listeners: [],
  listen(cb) {
    this.listeners.push(cb);
  },
  update() {
    this.listeners.forEach(cb => cb());
  },
  dispatch(action) {
    this.state = action(this.state);
    console.log('state : ', this.state);
    this.update();
  },
};

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
  editTask(editedTask) {
    console.log('edit task ', editedTask.id); // eslint-disable-line no-console
    return state => ({
      ...state,
      tasks: state.tasks.map(task => ((task.id === editedTask.id) ? editedTask : task)),
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

console.log('mounting react app ...');  // eslint-disable-line no-console
render(<App store={store} actions={actions} />, document.getElementById('__TODO__'));
