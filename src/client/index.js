import App from './containers/app';
import React from 'react';
import ReactDom from 'react-dom';
import createLogger from 'redux-logger';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { reducer } from './reducers';

const lists = {
  0: { id: 0, title: 'List1', inputtask: '' },
  1: { id: 1, title: 'List2', inputtask: '' },
  2: { id: 2, title: 'List3', inputtask: '' },
};

const tasks = {
  0: { id: 0, idList: 0, task: '000' },
  1: { id: 1, idList: 0, task: '1st' },
  2: { id: 2, idList: 0, task: '2nd' },
  3: { id: 3, idList: 0, task: '3rd' },
  4: { id: 4, idList: 1, task: '4th' },
  5: { id: 5, idList: 1, task: '5th' },
  6: { id: 6, idList: 1, task: '6th' },
  7: { id: 7, idList: 2, task: '7th' },
  8: { id: 8, idList: 2, task: '8th' },
  9: { id: 9, idList: 2, task: '9th' },
};

const initialState = {
  lists,
  tasks,
  inputlist: '',
};

const store = createStore(
  reducer,
  initialState,
  applyMiddleware(createLogger())
);

ReactDom.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('todo')
);
