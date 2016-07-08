import React from 'react'
import CustomButton from './custombutton'
import AddToTaskList from './addtotasklist'

const InputTask = ({ message, onButtonSelected }) =>
    <form onSubmit={addToTaskList}>
      <input
      	className='input-task'
      	placeholder={message}
      	type='text' />
    </form>

InputTask.propTypes = {
  message: React.PropTypes.string,
  type: React.PropTypes.string,
};

InputTask.defaultProps = {
  message: 'Nouvelle tâche',
  type: 'text',
};

export default InputTask
