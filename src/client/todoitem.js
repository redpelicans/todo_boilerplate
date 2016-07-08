import React from 'react'
import Item from './item'
import ListTitle from './listtitle'
import TodoApp from './app'

const TodoItem = ({ tasks, title, removeItemClick }) => {
  const data = tasks.map((task) => <Item key={task.id} name={task.name} removeItemClick={removeItemClick} />)
  return (
    <div className='todoitem'>
        <ListTitle title={title} />
        {data}
    </div>
    )
}

TodoItem.propTypes = {
  tasks: React.PropTypes.array.isRequired,
  title: React.PropTypes.string.isRequired,
  removeItemClick: React.PropTypes.func.isRequired,
  
};

export default TodoItem
