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
  { id: 2, title: 'Sprint two', tasks: [
      { id: 7, text: 'stateful components' },
      { id: 8, text: 'write tests' },
  ] },
  { id: 3, title: 'Sprint three', tasks: [
      { id: 9, text: 'redux' },
      { id: 10, text: 'write tests' },
  ] },
  { id: 4, title: 'Flexbox wrap test', tasks: [
      { id: 11, text: 'yata' },
  ] },
];

const TEMPLATE = {
  0: {
    title: 'sprint one',
    tasks: {
      0: { text: 'yata' },
      1: { text: 'yo' }
    }
  }
}

const EMPTY = {}

ReactDom.render(
  <TodoApp lists={EMPTY} />,
  document.getElementById('todo')
)
