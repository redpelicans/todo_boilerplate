import React from 'react'
import RemoveTask from './removetask'

const Task = ({ idTask, idList, task, ...actions }) =>
  <li className='task'>{ task }
  <RemoveTask { ...actions } idList={ idList } idTask={ idTask } />
  </li>

Task.propTypes = {
  idList: React.PropTypes.number.isRequired,
  idTask: React.PropTypes.number.isRequired,
  task: React.PropTypes.string,
};

export default Task
