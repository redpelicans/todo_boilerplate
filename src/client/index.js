import React from 'react';
import ReactDom from 'react-dom';
import TodoApp from './components/TodoApp';

const LISTS = {};

ReactDom.render(
  <TodoApp lists={LISTS} />,
  document.getElementById('todo')
);
