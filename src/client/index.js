import React from 'react';
import ReactDom from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import { Provider } from 'react-redux';
import App from './containers/App';
import rootReducer from './reducers';

const logger = createLogger();

const store = createStore(
  rootReducer,
  applyMiddleware(logger),
);

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('todo')
);
