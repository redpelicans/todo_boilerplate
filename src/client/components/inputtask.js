import React from 'react'
import addToTaskList from './app'

const InputTask = ({ idTask, idList, message, onButtonSelected }) => {
  const handleEnter = (e) => {
  	if (e.key === 'Enter') {
  	console.log(e.target.value);
  	onButtonSelected(e, idList, idTask);
  };
  };
  return (
      <div className="input-task">
      <input
      	onKeyPress={ handleEnter }
        className='input-task'
        placeholder={ message }
        type='text' />
      </div>
      )
}

InputTask.propTypes = {
  message: React.PropTypes.string,
};

InputTask.defaultProps = {
  message: 'Nouvelle tâche',
};

export default InputTask
