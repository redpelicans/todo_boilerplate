import React from 'react';
import { render } from 'react-dom';
import App from './components/app';

let id = 0;

const store = {
  state: { todos: [{ id: 0, title: '0'}] },
  _listeners: [],
  listen(cb) { this._listeners.push(cb) },
  forceUpdate(){ this._listeners.forEach(cb => cb()) },
  dispatch(action){
    console.log(action);
    this.state = action(this.state);
    this.forceUpdate();
  },
};

const actions = {
  addTodo(name){
    return state => ({ todos: state.todos.concat({ id: ++id, title: name }) });
  },
  deleteTodo(id){
    return state => ({ todos: state.todos.filter(todo => todo.id !== id) });
  },
};

// const Store = {
//   todos: [
//     {
//       id: 1,
//       title: 'todo1',
//     },
//     {
//       id: 2,
//       title: 'todo2',
//     },
//   ],
//   task1: [
//     {
//       id: 1,
//       todoId: 1,
//       title: 'task x',
//       checked: true,
//     },
//     {
//       id: 2,
//       todoId: 1,
//       title: 'task x',
//       checked: false,
//     },
//     {
//       id: 3,
//       todoId: 1,
//       title: 'task x',
//       checked: false,
//     },
//   ],
//   task2: [
//     {
//       id: 1,
//       todoId: 2,
//       title: 'task x',
//       checked: true,
//     },
//     {
//       id: 2,
//       todoId: 2,
//       title: 'task x',
//       checked: false,
//     },
//     {
//       id: 3,
//       todoId: 2,
//       title: 'task x',
//       checked: false,
//     },
//   ],
// };

window.store = store
window.actions = actions

// const actions = {
// };

console.log('mounting react app ...');  // eslint-disable-line no-console
render(<App store={store} actions={actions} />, document.getElementById('__TODO__'));

