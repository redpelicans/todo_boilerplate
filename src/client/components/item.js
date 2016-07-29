import React from 'react';
import RemoveTask from './removetask';

const Item = ({ name, onRemoveTask, taskId }) =>
  <div className='item'>
    <li >{ name }<RemoveTask onRemoveTask={onRemoveTask} taskId={taskId} /></li>
  </div>;

Item.propTypes = {
  name: React.PropTypes.string.isRequired,
  onRemoveTask: React.PropTypes.func.isRequired,
  taskId: React.PropTypes.number.isRequired,
};

export default Item;
