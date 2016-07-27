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

const initialState = {
  input: {
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
