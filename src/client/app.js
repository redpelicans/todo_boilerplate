import React from 'react'
import Title from './title'
import CreateList from './createlist'
import TodoList from './todolist'

const TodoApp = (props) =>
	<div className='todoapp'>
		<Title title='Marianne&#39;s todo list'/>
		<CreateList/>
		<TodoList {...props}/>
	</div>

export default TodoApp
