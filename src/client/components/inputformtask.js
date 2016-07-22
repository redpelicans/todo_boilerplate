import React from 'react';

const InputFormTask = ({ idList, value, ...actions }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    actions.onSubmitAddTask(idList);
  };
  const handleChange = (event) => {
    event.preventDefault();
    actions.onChangeTask(idList, event.target.value);
  };
  return (
    <div className='addtask'>
      <form onSubmit={ handleSubmit }>
        <input
          onChange={ handleChange }
          placeholder='New task...'
          type='text'
          value={ value }
        />
      </form>
    </div>
  );
};

InputFormTask.propTypes = {
  idList: React.PropTypes.number,
  value: React.PropTypes.string,
};

export default InputFormTask;
