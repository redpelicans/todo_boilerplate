import React from 'react'
import ReactDom from 'react-dom'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'

import input from './reducers/inputReducer'
import lists from './reducers/listReducer'
import tasks from './reducers/taskReducer'

import App from './containers/app'

// EXPERIMENTAL
import doGet from './actions/async/todo'
import { addList } from './actions/lists'
import { addTask } from './actions/tasks'
//

const initialState = {
  input: {
    api: 'http://rp4.redpelicans.com:13004/api/todo/',
    lists: '',
  },
  lists: [
  ],
  tasks: [
  ],
};

const todoStore = createStore(
  combineReducers({ input, lists, tasks }),
  initialState,
  applyMiddleware(createLogger(), thunk)
);

ReactDom.render(
  <Provider store={todoStore}>
    <App />
  </Provider>, document.getElementById('react-wrapper')
);

// EXPERIMENTAL
const onLists = lists => { _.map(lists, list => {
  console.log('list : ', list);
  todoStore.dispatch(addList(list));
}) }

const onTasks = tasks => { _.map(tasks, task => {
  console.log('task : ', task);
  todoStore.dispatch(addTask(task));
}) }

doGet('lists')(onLists);
doGet('tasks')(onTasks);
