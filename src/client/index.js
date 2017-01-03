import React from 'react';
import { render } from 'react-dom';
import App from './components/App/index';

const store = {
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

const actions = {
  addTodo: () => { console.log('add todo'); }, // eslint-disable-line no-console
  delTodo: () => { console.log('del todo'); }, // eslint-disable-line no-console
  editTask: () => { console.log('edit task'); }, // eslint-disable-line no-console
  delTask: () => { console.log('del task'); }, // eslint-disable-line no-console
};

console.log('mounting react app ...');  // eslint-disable-line no-console
render(<App todos={store.todos} tasks={store.tasks} actions={actions} />, document.getElementById('__TODO__'));
