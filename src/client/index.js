import React from 'react'
import ReactDom from 'react-dom'
import createLogger from 'redux-logger'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

import App from './containers/app'
import todoReducer from './reducers/todoReducer'

const initialState = {
  lists: [{id: 0, title: 'first'}],
  tasks: [{id: 0, description: 'the first task', listId: 0}]
};

const todoStore = createStore( todoReducer, initialState, applyMiddleware( createLogger() ) );


ReactDom.render(
  <Provider store={todoStore}>
    <App />
  </Provider>, document.getElementById('react-wrapper')
);
