import React from 'react'
import TodoItem from './todoitem'
import TodoApp from './app'

const TodoList = ({ list, removeItemClick} ) => {
  const data = list.map((tasks) => <TodoItem {...tasks} removeItemClick={removeItemClick} key={tasks.id} />)
  return (
		<div className='todolist'>
			{data}
		</div>
	)
};

TodoList.propTypes = { 
	list: React.PropTypes.array.isRequired,
	removeItemClick: React.PropTypes.func.isRequired,
};

export default TodoList
