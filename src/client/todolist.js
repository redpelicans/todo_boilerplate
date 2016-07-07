import React from 'react'
import TodoItem from './todoitem'

const TodoList = ({ list }) => {
  const data = list.map((tasks) => <TodoItem {...tasks} key={tasks.id} />)
  return (
		<div className='todolist'>
			{data}
		</div>
	)
};

TodoList.propTypes = { list: React.PropTypes.array.isRequired };

export default TodoList
