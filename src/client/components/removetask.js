import React from 'react';

const	RemoveTask = ({ idTask, ...actions }) => {
  const handleClick = (e) => {
    e.stopPropagation();
    actions.onRemoveTask(idTask);
  };
  return <button className='removeTask' onClick={ handleClick } type='button'>X</button>;
};

RemoveTask.propTypes = {
  idTask: React.PropTypes.string.isRequired,
};

export default RemoveTask;
