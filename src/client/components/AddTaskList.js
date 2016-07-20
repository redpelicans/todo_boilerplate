import React from 'react';

const AddTaskList = ({ onAddList, onChange, value }) => {

  const handleUserInput = (e) => {
    e.preventDefault();
    onChange(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddList();
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
  onAddList: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  value: React.PropTypes.string.isRequired,
};

export default AddTaskList;
