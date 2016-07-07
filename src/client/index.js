import React from 'react'
import ReactDom from 'react-dom'

let Items = [
	{id:'1', title: 'List1', tasks:[{id:1, name:'A'},{id:2, name:'B'},{id:3, name:'C'}]},
	{id:'2', title: 'List2', tasks:[{id:1, name:'E'},{id:2, name:'F'},{id:3, name:'G'}]},

];

ReactDom.render(
		<TodoApp items={Items}/>, 
		document.getElementById('todo')
		)
