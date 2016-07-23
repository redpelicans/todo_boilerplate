import React from 'react'

const Task = ({ task }) => (
  <li className='task flex-item padded'>{task.id}: {task.description}</li>);

Task.propTypes = {
  task: React.PropTypes.object.isRequired,
}

export default Task
