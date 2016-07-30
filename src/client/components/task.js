import React from 'react'

const Task = ({ task, onDelTask }) => (
  <div className='task flex-item padded'>
  <button id={task.id} onClick={ e => onDelTask(e.target.id) } >x</button>
    <h5>{task.id}: {task.description}</h5>
  </div>);

Task.propTypes = {
  onDelTask: React.PropTypes.func.isRequired,
  task: React.PropTypes.object.isRequired,
}

export default Task
