import React from 'react';
import RemoveTask from './removetask';

const Task = ({ idTask, task, ...actions }) =>
  <li className='task'>{ task }
  <RemoveTask { ...actions } idTask={ idTask } />
  </li>;

Task.propTypes = {
  idTask: React.PropTypes.number.isRequired,
  task: React.PropTypes.string,
};

export default Task;
