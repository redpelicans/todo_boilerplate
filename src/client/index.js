import React from 'react'
import ReactDom from 'react-dom'
import createLogger from 'redux-logger'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'

import input from './reducers/inputReducer'
import lists from './reducers/listReducer'
import tasks from './reducers/taskReducer'

import App from './containers/app'

const initialState = {
  input: {
    lists: '',
  },
  lists: [
    { id: 0, title: 'first', input: '' },
    { id: 1, title: 'second', input: '' },
  ],
  tasks: [
    { id: 0, description: 'the first task', listId: 0 },
    { id: 1, description: 'the 2nd task', listId: 0 },
    { id: 2, description: 'the 3rd task', listId: 1 },
    { id: 3, description: 'the 4th task', listId: 1 },
  ],
};

const todoStore = createStore(
  combineReducers({ input, lists, tasks }),
  initialState,
  applyMiddleware(createLogger())
);

ReactDom.render(
  <Provider store={todoStore}>
    <App />
  </Provider>, document.getElementById('react-wrapper')
);
