import React from 'react';

const CreateTask = ({ listId, onChangeTask, onCreateTask, taskVal }) => {
  const handleCreateTask = (event) => {
    event.preventDefault();
    event.stopPropagation();
    onCreateTask(listId);
  };
  const handleChangeTask = (event) => {
    event.preventDefault();
    event.stopPropagation();
    onChangeTask(event.target.value);
  };
  return (
    <div className='createtask'>
      <form onSubmit={ handleCreateTask } >
      <input
        onChange={ handleChangeTask }
        placeholder='new task'
        type='text'
        value={ taskVal }
      />
      </form>
    </div>
  );
};

CreateTask.propTypes = {
  listId: React.PropTypes.number.isRequired,
  onChangeTask: React.PropTypes.func.isRequired,
  onCreateTask: React.PropTypes.func.isRequired,
  taskVal: React.PropTypes.string.isRequired,
};

export default CreateTask;
