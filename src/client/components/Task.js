import React from 'react';
import RemoveTask from './RemoveTask';

const Task = (props) =>
  <div className='task'>
    <span>{props.text}</span>
    <RemoveTask
      listId={props.listId}
      onRemove={props.onRemoveTask}
      taskId={props.taskId} />
  </div>;

Task.propTypes = {
  listId: React.PropTypes.string.isRequired,
  onRemoveTask: React.PropTypes.func.isRequired,
  taskId: React.PropTypes.string.isRequired,
  text: React.PropTypes.string.isRequired,
};

export default Task;
