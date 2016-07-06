import React from 'react'
import ReactDom from 'react-dom'
import TodoApp from './components/TodoApp'

const LISTS = [
  { id: 0, title: 'To do', tasks: [
      { id: 0, text: 'buy eggs' },
      { id: 1, text: 'buy milk' },
      { id: 2, text: 'call bank' },
      { id: 6, text: 'watch got' },
  ] },
  { id: 1, title: 'Sprint one', tasks: [
      { id: 3, text: 'stateless components' },
      { id: 4, text: 'write tests' },
      { id: 5, text: 'flexbox' },
  ] },
];

ReactDom.render(
  <TodoApp lists={LISTS} />,
  document.getElementById('todo')
)
