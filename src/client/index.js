import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import actions from './actions';

const state = [
  {
    title: 'my first todoList',
    id: 0,
    checked: true,
    tasks: [
      { title: 'my first task', checked: false, id: 0 },
      { title: 'my second task', checked: true, id: 1 },
      { title: 'my third task', checked: false, id: 2 },
      { title: 'my fourth task', checked: false, id: 3 },
      { title: 'my fifth task', checked: true, id: 4 },
      { title: 'my sixth task', checked: false, id: 5 },
    ],
  },
  {
    title: 'my second todoList',
    checked: false,
    id: 1,
    tasks: [
      { title: 'my first task', checked: false, id: 6 },
      { title: 'my second task', checked: false, id: 7 },
      { title: 'my third task', checked: true, id: 8 },
    ],
  },
];

const store = {
  state,
  listeners: [],
  listen(cb) { this.listeners.push(cb); },
  callListeners() { this.listeners.forEach(cb => cb()); },
  dispatch(action) {
    this.state = action(this.state);
    this.callListeners();
  },
};

console.log('mounting react app ...');

render(<App store={store} actions={actions} />, document.getElementById('__TODO__'));
