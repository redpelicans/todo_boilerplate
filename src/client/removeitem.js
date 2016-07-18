import React from 'react'

const RemoveItem = ({ listId, onRemoveTask, taskId }) => {
  const handleRemoveItem = (event) => {
    event.preventDefault();
    event.stopPropagation();
    onRemoveTask({ listId, taskId });
  };

  return (
    <div className='removeitem'><button onClick={ handleRemoveItem }>x</button></div>
    );
}

RemoveItem.propTypes = {
  listId: React.PropTypes.number.isRequired,
  onRemoveTask: React.PropTypes.func.isRequired,
  taskId: React.PropTypes.number.isRequired,
};

export default RemoveItem
