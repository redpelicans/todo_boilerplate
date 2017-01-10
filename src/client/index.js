import React from 'react';
import { render } from 'react-dom';
import App from './components/App';

let todoId = 2;

const state = {
  todos: [
    {
      id: 1,
      title: 'todo1',
      mode: 1,
    },
    {
      id: 2,
      title: 'todo2',
      mode: 1,
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
      title: 'task 2, todoid = 1',
      checked: false,
    },
    {
      id: 3,
      todoId: 1,
      title: 'task 3, todoid = 1',
      checked: false,
    },
    {
      id: 4,
      todoId: 2,
      title: 'task 4, todoid = 2',
      checked: true,
    },
    {
      id: 5,
      todoId: 2,
      title: 'task 5, todoid = 2',
      checked: false,
    },
    {
      id: 6,
      todoId: 2,
      title: 'task 6, todoid = 2',
      checked: false,
    },
  ],
  mode: {
    filter: 0,
  }
};

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

let taskId = 6;

const actions = {
  addTodo(name){
  	if (!name)
  		return state => state
  	else
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
  addTask(task, todoId){
  	return state => ({
  		todos: state.todos,
  		tasks: state.tasks.concat({ id: ++taskId, todoId: todoId, title: task, checked: false }),
  	});
  },
  delTask(id){
  	return state => ({
  		todos: state.todos,
  		tasks: state.tasks.filter(task => task.id !== id),
  	});
  },
  manageTask(id, checked){
  	return state => ({
  		...state,
  		tasks: state.tasks.map(task => {
  			if (task.id === id) return {...task, checked: checked}
  			return task;
  		}),
  	});
  },
  updateTask(id, newTitle){
    return state => ({
  		...state,
  		tasks: state.tasks.map(task => {
  			if (task.id === id) return {...task, title: newTitle}
  			return task;
  		}),
  	});
  },
  setMode(newMode, todoId){
    return state => ({
      ...state,
      todos: state.todos.map(todo => {
        if (todo.id === todoId) return {...todo, mode: newMode}
        return todo;
      }),
    });
  },

};

window.store = store
window.actions = actions

console.log('mounting react app ...');  // eslint-disable-line no-console
render(<App store={store} actions={actions} />, document.getElementById('__TODO__'));
