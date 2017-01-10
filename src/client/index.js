import React from 'react';
import { render } from 'react-dom';
import 'antd/dist/antd.css';
import App from './components/App/app';
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
        checked: false,
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
        checked: true,
      },
      4: {
        id: 4,
        name: 'task_3',
        checked: false,
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

export default store;

window.store = store;
window.actions = actions;
