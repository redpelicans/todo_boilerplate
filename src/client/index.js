import React from 'react'
import ReactDom from 'react-dom'
import App from './components/App'

const test = [
	{ id: 1, name: 'List 1', elems: [
		{ id: 1.1, name: 'Task 1' },
		{ id: 2.2, name: 'Task 2' },
		{ id: 1.3, name: 'Task 3' },
		{ id: 1.4, name: 'Task 4' }] },
	{ id: 2, name: 'List 2', elems: [
		{ id: 1.1, name: 'Task A' },
		{ id: 2.2, name: 'Task B' },
		{ id: 2.3, name: 'Task C' },
		{ id: 2.4, name: 'Task D' }] },
	{ id: 3, name: 'List 3', elems: [] }];

ReactDom.render(<App lists={test}/>, document.getElementById('todo'));
