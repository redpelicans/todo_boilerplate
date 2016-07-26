import App from './containers/app';
import React from 'react';
import ReactDom from 'react-dom';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
import { fetchLists } from './actions/fetch';

const loggerMiddleware = createLogger();

const store = createStore(
  reducer,
  applyMiddleware(thunk, loggerMiddleware),
);

store.dispatch(fetchLists());

ReactDom.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('todo')
);
