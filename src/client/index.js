import React from 'react';
import thunkMiddleware from 'redux-thunk';
import ReactDom from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import { Provider } from 'react-redux';
import TodoApp from './containers/app';
import reducer from './reducers';

const store = createStore(
  reducer,
  applyMiddleware(thunkMiddleware, createLogger()),
);

ReactDom.render(
    <Provider store={ store }>
      <TodoApp />
    </Provider>,
		document.getElementById('todo'),
		);
