import React from 'react';

const AddTask = ({ onAddTask, onChange, value, listId }) => {

  const handleUserInput = (e) => {
    e.preventDefault();
    onChange(listId, e.target.value);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    onAddTask(listId);
  };

  return (
    <form onSubmit={handleAdd}>
      <input
        className='add-task'
        onChange={handleUserInput}
        placeholder='New task..'
        type='text' value
        value={value} />
    </form>
  );
}

AddTask.propTypes = {
  onAddTask: React.PropTypes.func.isRequired,
};

export default AddTask;
