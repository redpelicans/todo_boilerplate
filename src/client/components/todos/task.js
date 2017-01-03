import React, { PropTypes } from 'react';

const Task = ({ title, isChecked, actions }) =>
  <div className="todo-task">
    <input type="checkbox" onChange={() => {}} checked={isChecked} />
    <p style={isChecked ? { textDecoration: 'line-through' } : {}}>{title}</p>
    <button onClick={actions.editTask}>edit</button>
    <button onClick={actions.delTask}>del</button>
  </div>
;

Task.propTypes = {
  title: PropTypes.string,
  isChecked: PropTypes.bool,
  actions: PropTypes.object,
};

export default Task;
