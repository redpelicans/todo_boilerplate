import React from 'react';

const AddTaskList = ({ onAddTaskList, onChange, value }) => {

  const handleUserInput = (e) => {
    e.preventDefault();
    onChange(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTaskList();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className='add-tasklist'
        onChange={handleUserInput}
        placeholder='New Task list..'
        type='text'
        value={value} />
    </form>
  );
};

AddTaskList.propTypes = {
  onAddTaskList: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  value: React.PropTypes.string.isRequired,
};

export default AddTaskList;
