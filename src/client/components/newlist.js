import React from 'react'
// import { connect } from 'react-redux'
import { addList } from '../actions/lists'

const onNewList = e => {
  e.preventDefault();
  console.log('got new list', e.target.value);
  // dispatch(addList({}));
}

const handleChange = e => {
  console.log(e.target.value);
}

const NewList = () => (
  <div className='todo-list padded'>
    <form onSubmit={ onNewList }>
      <input defaultValue={'Tasklist Name'} onChange={ handleChange } />
      <button type='submit'>Add list</button>
    </form>
  </div>
);

export default NewList
