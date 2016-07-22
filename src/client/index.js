import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import App from './components/App';
import todo from './reducers/';

let store = createStore(
  todo,
  applyMiddleware(createLogger()));

ReactDom.render(<Provider store={ store }><App /></Provider>, document.getElementById('todo'));
