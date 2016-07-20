import React from 'react';
import RemoveTask from './RemoveTask';

const Task = (props) =>
  <div className='task'>
    <span>{props.task.text}</span>
    <RemoveTask onRemove={props.onRemoveTask} id={props.task.id} />
  </div>;

Task.propTypes = {
  onRemoveTask: React.PropTypes.func.isRequired,
  task: React.PropTypes.object.isRequired,
};

export default Task;
