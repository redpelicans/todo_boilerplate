import React from 'react'

const	RemoveTask = ({ idList, idTask, ...actions }) => {
  const handleClick = (e) => {
    e.stopPropagation();
    actions.removeTask({ idList, idTask });
  };
  return <button className='deleteTask' onClick={ handleClick } type='button'>X</button>
};

RemoveTask.propTypes = {
  idList: React.PropTypes.number.isRequired,
  idTask: React.PropTypes.number.isRequired,
};

export default RemoveTask
