import React from 'react'
import ReactDom from 'react-dom'
import createLogger from 'redux-logger'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

import App from './containers/app'
import reducer from './reducers/todoReducer'
// import lists from './reducers/listReducer'

const initialState = {
	input: {
		lists: '',
		tasks: [],
	},
	lists: [
		{id: 0, title: 'first'},
		{id: 1, title: 'second'}
	],
	tasks: [
		{id: 0, description: 'the first task', listId: 0},
		{id: 1, description: 'the 2nd task', listId: 0},
		{id: 2, description: 'the 3rd task', listId: 1},
		{id: 3, description: 'the 4th task', listId: 1},
	]
};

const todoStore = createStore( reducer, initialState, applyMiddleware( createLogger() ) );

console.log(todoStore.getState());

ReactDom.render(
  <Provider store={todoStore}>
    <App />
  </Provider>, document.getElementById('react-wrapper')
);
