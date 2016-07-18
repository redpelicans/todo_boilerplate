import React from 'react'
import ReactDom from 'react-dom'
import TodoApp from './app'

const items = [
	{ id: 0, title: 'List1', tasks: [{ id: 0, name: 'AAAA' }, { id: 1, name: 'BBB' }, { id: 2, name: 'CCCCCCC' }] },
	{ id: 1, title: 'List2', tasks: [{ id: 3, name: 'DDDDDDDDD' }, { id: 4, name: 'EE' }, { id: 5, name: 'FFFFF' }] },
	{ id: 2, title: 'List3', tasks: [{ id: 6, name: 'GG' }, { id: 7, name: 'HHH' }, { id: 8, name: 'IIIIIIIIII' }] },

];

ReactDom.render(
		<TodoApp lists={items}/ >,
		document.getElementById('todo'),
		)
