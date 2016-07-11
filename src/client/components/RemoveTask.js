import React from 'react';
import Button from './Button';

const RemoveTask = ({ listId, onRemove, taskId }) => {

  const handleRemove = () => {
    onRemove(listId, taskId);
  };

  return (
    <Button className='rm-task' onClick={handleRemove}>x</Button>
  );
};

RemoveTask.propTypes = {
  listId: React.PropTypes.string.isRequired,
  onRemove: React.PropTypes.func.isRequired,
  taskId: React.PropTypes.string.isRequired,
};

export default RemoveTask;
