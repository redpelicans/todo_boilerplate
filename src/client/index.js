import React from 'react';
import { render } from 'react-dom';
import App from './components/app';

const store = {
  state: {
    1: {
      order: 1,
      name: 'first_todo',
      tasks: {
        1: {
          name: 'task_1',
          checked: true,
        },
      },
    },
    2: {
      order: 2,
      name: 'second_todo',
      tasks: {
        1: {
          name: 'task_2_1',
          checked: false,
        },
        2: {
          name: 'task_2',
          checked: false,
        },
        3: {
          name: 'task_3',
          checked: true,
        },
      },
    },
  },
  listeners: [],
  listen(callback) { this.listeners.push(callback) },
  forceUpdate() { this.listeners.forEach(callback => callback()) },
  dispatch(action) {
    console.log("action : " + action);
    this.state = action(this.state);
    this.forceUpdate();
  }
};

const actions = {
  addArea() {
    console.log("Launch action AddArea()");
    /* not a function */
  }
  // addTodo: () => { console.log('Add todo'); },
  // deleteTodo: () => { console.log('Del todo'); },
  // editTodo: () => { console.log('Edit todo'); },
  // addTask: () => { console.log('Add Task'); },
  // deleteTask: () => { console.log('Del Task'); },
  // editTask: () => { console.log('Edit Task'); },
};

console.log('mounting react app ..');
render(<App store={store} actions={actions}/>, document.getElementById('__TODO__'));

