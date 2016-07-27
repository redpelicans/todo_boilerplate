import React from 'react'

const NewList = ({ inputVal, handleChange, onNewList, fetchLists, fetchTasks }) => {
  const handleInput = e => {
    handleChange(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (inputVal) {
      onNewList();
    }
  };
  return (
    <div className='todo-list padded'>
      <form onSubmit={ handleSubmit }>
        <input onChange={ handleInput } placeholder='New List' value={inputVal} />
        <button type='submit'>+</button>
      </form>
      <button onClick={ fetchTasks }>Get Tasks !</button>
      <button onClick={ fetchLists }>Get Lists !</button>
    </div>
  )
}

NewList.propTypes = {
  fetchLists: React.PropTypes.func.isRequired,
  fetchTasks: React.PropTypes.func.isRequired,
  handleChange: React.PropTypes.func.isRequired,
  inputVal: React.PropTypes.string,
  onNewList: React.PropTypes.func.isRequired,
}

export default NewList
