import React from 'react';

const RemoveTask = ({ onRemoveTask, taskId }) => {
  const handleRemoveTask = (event) => {
    event.preventDefault();
    event.stopPropagation();
    onRemoveTask(taskId);
  };

  return (
    <div className='removetask'><button onClick={ handleRemoveTask }>x</button></div>
    );
};

RemoveTask.propTypes = {
  onRemoveTask: React.PropTypes.func.isRequired,
  taskId: React.PropTypes.number.isRequired,
};

export default RemoveTask;
