import React from 'react';
import { render } from 'react-dom';
import App from './components/app';
import actions from './actions';

const state = {
  1: {
    id: 1,
    order: 1,
    name: 'first_todo',
    tasks: {
      1: {
        id: 1,
        name: 'task.1.1',
        checked: true,
      },
    },
  },
  2: {
    id: 2,
    order: 2,
    name: 'second_todo',
    tasks: {
      2: {
        id: 2,
        name: 'task.2.1',
        checked: false,
      },
      3: {
        id: 3,
        name: 'task_2',
        checked: false,
      },
      4: {
        id: 4,
        name: 'task_3',
        checked: true,
      },
    },
  },
};

const store = {
  state,
  listeners: [],
  listen(callback) { this.listeners.push(callback); },
  forceUpdate() { this.listeners.forEach(callback => callback()); },
  dispatch(action) {
    this.state = action(this.state);
    this.forceUpdate();
  },
};

console.log('mounting react app ..');
render(<App store={store} actions={actions} />, document.getElementById('__TODO__'));

window.store = store;
window.actions = actions;
