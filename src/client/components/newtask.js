import React from 'react'

const NewTask = ({ listID, input, handleChange, onNewTask }) => {
  const handleInput = e => {
    handleChange(e.target.value, listID);
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (input) {
      onNewTask(input, listID);
    }
  };
  return (
    <div className='flex-item padded task'>
      <form onSubmit={ handleSubmit }>
        <input className='task_input' onChange={ handleInput } placeholder='New Task' value={input} />
        <button type='submit'>+</button>
      </form>
    </div>
  )
}

NewTask.propTypes = {
  handleChange: React.PropTypes.func,
  input: React.PropTypes.string,
  listID: React.PropTypes.number,
  onNewTask: React.PropTypes.func,
}

export default NewTask
