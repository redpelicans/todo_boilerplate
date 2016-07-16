import React from 'react'

const CreateTask = ({ idList, ...actions }) => {
  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      actions.actions.createTask(idList, e.target.value);
    }
  };
  return (
      <div className='createTask'>
      <input
        onKeyPress={ handleEnter }
        placeholder='New task...'
        type='text' />
      </div>
      )
}

CreateTask.propTypes = {
  idList: React.PropTypes.number,
};

export default CreateTask
