import React from 'react';
import RemoveTask from './RemoveTask';

const Task = (props) =>
  <div className='task'>
    <span>{props.task.text}</span>
    <RemoveTask
      listId={props.list.id}
      onRemove={props.onRemoveTask}
      taskId={props.task.id} />
  </div>;

Task.propTypes = {
  listId: React.PropTypes.number.isRequired,
  onRemoveTask: React.PropTypes.func.isRequired,
  taskId: React.PropTypes.number.isRequired,
  text: React.PropTypes.string.isRequired,
};

export default Task;
