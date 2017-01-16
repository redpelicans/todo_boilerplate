import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import MainApp from './components/App';
import configureStore from './store';
import initialState from './mystate';

const store = configureStore(initialState);

render(
  <Provider store={store}>
    <MainApp />
  </Provider>,
  document.getElementById('root'));


export default store;
