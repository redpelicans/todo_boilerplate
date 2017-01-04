import React from 'react';
import { render } from 'react-dom';
import App from './components/app';

let todoId = 2;

const state = {
  todos: [
    {
      id: 1,
      title: 'todo1',
    },
    {
      id: 2,
      title: 'todo2',
    },
  ],
  tasks: [
    {
      id: 1,
      todoId: 1,
      title: 'task 1, todoid = 1',
      checked: true,
    },
    {
      id: 2,
      todoId: 1,
      title: 'task 1, todoid = 1',
      checked: false,
    },
    {
      id: 3,
      todoId: 1,
      title: 'task 1, todoid = 1',
      checked: false,
    },
    {
      id: 4,
      todoId: 2,
      title: 'task 1, todoid = 2',
      checked: true,
    },
    {
      id: 5,
      todoId: 2,
      title: 'task 1, todoid = 2',
      checked: false,
    },
    {
      id: 6,
      todoId: 2,
      title: 'task 1, todoid = 2',
      checked: false,
    },
  ],
};

let taskId = 6;

const store = {
  state,
  _listeners: [],
  listen(cb) { this._listeners.push(cb) },
  forceUpdate(){ this._listeners.forEach(cb => cb()) },
  dispatch(action){
    this.state = action(this.state);
    this.forceUpdate();
  },
};

const actions = {
  addTodo(name){
    return state => ({
    	todos: state.todos.concat({ id: ++todoId, title: name }),
    	tasks: state.tasks,
    });
  },
  deleteTodo(id){
    return state => ({
    	todos: state.todos.filter(todo => todo.id !== id),
    	tasks: state.tasks,
    });
  },
  addTask(task, todoRef){
  	return state => ({
  		todos: state.todos,
  		tasks: state.tasks.concat({ id: ++taskId, todoId: todoRef, title: task, checked: false }),
  	})
  },
  delTask(id){
  	return state => ({
  		todos: state.todos,
  		tasks: state.tasks.filter(task => task.id !== id),
  	})
  },
};

window.store = store
window.actions = actions

console.log('mounting react app ...');  // eslint-disable-line no-console
render(<App store={store} actions={actions} />, document.getElementById('__TODO__'));

