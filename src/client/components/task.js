import React from 'react'
import CustomButton from './custombutton'

const Task = ({ task, onButtonSelected }) => <li className='task'>{ task } <CustomButton name='remove' message='X' onClick={onButtonSelected} /></li>

Task.propTypes = {
  task: React.PropTypes.string.isRequired,
};

export default Task
