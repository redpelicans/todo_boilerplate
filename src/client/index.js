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
    this.update();
  },
};
const actions = {
  addTodo(name) {
    console.log('add todo ', name); // eslint-disable-line no-console
    return state => ({
      todos: state.todos.concat({ title: name, id: state.todos.length + 1 }),
      tasks: state.tasks,
    });
  },
  delTodo(id) {
    console.log('del todo ', id); // eslint-disable-line no-console
    return state => ({
      todos: state.todos.filter(todo => todo.id !== id),
      tasks: state.tasks,
    });
  },
  editTask() {
    console.log('edit task'); // eslint-disable-line no-console
  },
  delTask() {
    console.log('del task'); // eslint-disable-line no-console
  },
};

console.log('mounting react app ...');  // eslint-disable-line no-console
render(<App store={store} actions={actions} />, document.getElementById('__TODO__'));
