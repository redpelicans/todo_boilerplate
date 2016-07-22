import React from 'react'
// import { connect } from 'react-redux'


let currID = 2;

const NewList = ({ inputVal, handleChange, onNewList }) => {
  const handleInput = e => {
    handleChange(e.target.value);
  }
  const handleSubmit = e => {
    e.preventDefault();
    onNewList();
  }
  return(
  <div className='todo-list padded'>
    <form onSubmit={ handleSubmit }>
      <input value={inputVal} onChange={ handleInput } />
      <button type='submit'>Add list</button>
    </form>
  </div>
)};

export default NewList
