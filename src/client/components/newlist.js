import React from 'react'

const NewList = ({ inputVal, handleChange, onNewList }) => {
  const handleInput = e => {
    handleChange(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    onNewList();
  };
  return (
    <div className='todo-list padded'>
      <form onSubmit={ handleSubmit }>
        <input onChange={ handleInput } value={inputVal} />
        <button type='submit'>Add list</button>
      </form>
    </div>
  )
}

NewList.propTypes = {
  handleChange: React.PropTypes.func.isRequired,
  inputVal: React.PropTypes.string,
  onNewList: React.PropTypes.func.isRequired,
}

export default NewList
