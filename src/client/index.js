import React from 'react'
import ReactDom from 'react-dom'
import App from './components/App'

const test = {
  1: {
    name: 'List 1',
    elems: {
      1: { name: 'Task 1' },
      2: { name: 'Task 2' } } },
  2: {
    name: 'List 2',
    elems: {
      1: { name: 'Task A' } } } }

const test2 = {}

ReactDom.render(<App lists={test2}/>, document.getElementById('todo'));
