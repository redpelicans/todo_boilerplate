import React, { PropTypes } from 'react';

const Task = ({ task, dispatch, onDel, onEdit }) =>
  <div className="todo-task">
    <input
      type="checkbox"
      onChange={
        () => dispatch(onEdit(
          Object.assign({}, task, { isChecked: !task.isChecked })
        ))}
      checked={task.isChecked}
    />
    <p style={task.isChecked ? { textDecoration: 'line-through' } : {}}>
      {task.title}
    </p>
    <button
      onClick={() => dispatch(onEdit(
        Object.assign({}, task, { title: `${task.title} edited` })
      ))}
    >edit</button>
    <button onClick={() => dispatch(onDel(task.id))}>del</button>
  </div>
;

Task.propTypes = {
  task: PropTypes.object,
  dispatch: PropTypes.func,
  onDel: PropTypes.func,
  onEdit: PropTypes.func,
};

export default Task;
