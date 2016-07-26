import React from 'react'

const NewList = ({ inputVal, handleChange, onNewList, onRefresh }) => {
  const handleInput = e => {
    handleChange(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (inputVal) {
      onNewList();
    }
  };
  const handleRefresh = () => { 
    console.log('Refresh  was clicked');
    onRefresh();
  }
  return (
    <div className='todo-list padded'>
      <form onSubmit={ handleSubmit }>
        <input onChange={ handleInput } placeholder='New List' value={inputVal} />
        <button type='submit'>+</button>
      </form>
      <button onClick={ handleRefresh }>Refresh</button>
    </div>
  )
}

NewList.propTypes = {
  handleChange: React.PropTypes.func.isRequired,
  inputVal: React.PropTypes.string,
  onNewList: React.PropTypes.func.isRequired,
}

export default NewList
