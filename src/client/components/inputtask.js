import React from 'react'
import addToTaskList from './addtotasklist'

const InputTask = ({ message }) =>
    <form onSubmit={addToTaskList}>
      <input
        className='input-task'
        placeholder={message}
        type='text' />
    </form>

InputTask.propTypes = {
  message: React.PropTypes.string,
};

InputTask.defaultProps = {
  message: 'Nouvelle tâche',
};

export default InputTask
