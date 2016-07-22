import React from 'react';
import ReactDom from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import { Provider } from 'react-redux';
import TodoApp from './containers/app';
import reducer from './reducers';

const stat = {
  lists: {
    'listVal': '',
    0: { title: 'List1' },
    1: { title: 'List2' },
    2: { title: 'List3' },
  },
  tasks: {
    'taskVal': '',
    0: { listId: 0, name: 'AAAA' },
    1: { listId: 0, name: 'BB' },
    2: { listId: 1, name: 'CCCC' },
    3: { listId: 1, name: 'DDD' },
    4: { listId: 2, name: 'EEEEE' },
    5: { listId: 2, name: 'F' },
  },
};

const initialState = {
  lists: stat.lists,
  tasks: stat.tasks,
};

const store = createStore(
  reducer,
  initialState,
  applyMiddleware(createLogger()),
);

ReactDom.render(
    <Provider store={ store }>
      <TodoApp />
    </Provider>,
		document.getElementById('todo'),
		);
