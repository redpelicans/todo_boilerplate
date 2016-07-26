import React from 'react';
import RemoveTask from './RemoveTask';

const Task = (props) =>
  <div className='task'>
    <span>{props.task.description}</span>
    <RemoveTask id={props.task.id} onRemove={props.onRemoveTask} />
  </div>;

Task.propTypes = {
  onRemoveTask: React.PropTypes.func.isRequired,
  task: React.PropTypes.object.isRequired,
};

export default Task;
