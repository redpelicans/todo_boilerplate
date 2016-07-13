import React from 'react'
import CustomButton from './custombutton'

const Task = ({ idTask, idList, task, onButtonSelected }) =>
  <li className='task'>{ task }
  <CustomButton idTask={ idTask } idList={ idList } message='X' name='remove' onButtonSelected={ onButtonSelected } />
  </li> 

Task.propTypes = {
  idTask: React.PropTypes.number.isRequired,
  onButtonSelected: React.PropTypes.func.isRequired,
  task: React.PropTypes.string,
};

Task.defaultProperties = {
  task: '',
}

export default Task
