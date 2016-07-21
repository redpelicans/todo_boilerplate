import React from 'react'

const Task = ({task}) => (
  <li className="task flex-item padded">{task.id}: {task.description}</li>);

export default Task
