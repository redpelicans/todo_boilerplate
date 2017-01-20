import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import MainApp from './components/App';
import configureStore from './store';
import initialState from './mystate';
import { loadTodos } from './actions/todos';
import { loadTasks } from './actions/tasks';

const store = configureStore(initialState);

store.dispatch(loadTodos());
store.dispatch(loadTasks());

render(
  <Provider store={store}>
    <MainApp />
  </Provider>,
  document.getElementById('root'));


export default store;
