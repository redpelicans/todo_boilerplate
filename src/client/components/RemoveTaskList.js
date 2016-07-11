import React from 'react';
import Button from './Button';

const RemoveTaskList = ({ listId, onRemove }) => {

  const handleRemove = () => {
    onRemove(listId);
  };

  return (
    <Button className='rm-task-list' onClick={handleRemove}>x</Button>
  );
};

RemoveTaskList.propTypes = {
  listId: React.PropTypes.string.isRequired,
  onRemove: React.PropTypes.func.isRequired,
};

export default RemoveTaskList;
