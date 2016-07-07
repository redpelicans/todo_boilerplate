import React from 'react'
import RemoveTask from './RemoveTask'

const Task = ({ text }) =>
  <div className='task'>
    <span>{text}</span><RemoveTask />
  </div>

Task.propTypes = { text: React.PropTypes.string }

export default Task
