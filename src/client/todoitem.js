import React from 'react'
import Item from './item'
import ListTitle from './listtitle'

const TodoItem = ({ tasks, title }) => {
  const data = tasks.map((task) => <Item key={task.id} name={task.name} />)
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
};

export default TodoItem
