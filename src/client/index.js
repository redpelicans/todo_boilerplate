import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import Provider from './containers/Provider';

let id = 0;

const store = {
  _listeners: [],
  dispatch(action){
    this.state = action(this.state);
    this.forceUpdate();
  },
  listen(cb) { this._listeners.push(cb) },
  forceUpdate(){ this._listeners.forEach(cb => cb()) },
  state: { todos: [] },
};

const actions = {
  addTodo(){ 
    return (state) => ({ todos: state.todos.concat({ id: id++, title: String(id) }) });
  },
  deleteTodo(id){ 
    return (state) => ({ todos: state.todos.filter(todo => todo.id !== id) });
  },
};

console.log('mounting react app ...');  // eslint-disable-line no-console 
const Root = (
  <Provider store={store} actions={actions}>
    <App />
  </Provider>
);
render(Root, document.getElementById('__TODO__'));
