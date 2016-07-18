import React from 'react'
import RemoveItem from './removeitem'

const Item = ({ listId, name, onRemoveTask, taskId }) =>
  <div className='item'>
  <li >{ name }<RemoveItem listId={listId} onRemoveTask={onRemoveTask} taskId={taskId} /></li>
  </div>

Item.propTypes = {
  listId: React.PropTypes.number.isRequired,
  name: React.PropTypes.string.isRequired,
  onRemoveTask: React.PropTypes.func.isRequired,
  taskId: React.PropTypes.number.isRequired,
};

export default Item
