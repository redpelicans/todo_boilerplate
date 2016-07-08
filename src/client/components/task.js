import React from 'react'
import CustomButton from './custombutton'

const Task = ({ task, onButtonSelected }) =>
  <li className='task'>{ task }
  <CustomButton message='X' name='remove' onButtonSelected={onButtonSelected} />
  </li>

Task.propTypes = {
  onButtonSelected: React.PropTypes.func,
  task: React.PropTypes.string,
};

Task.defaultProperties = {
  task: '',
}

export default Task
