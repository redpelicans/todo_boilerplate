import React, { PropTypes } from 'react';

const edit = () => {};
const del = () => {};

const Task = ({ name, isChecked }) =>
  <div className="todo-task">
    <input type="checkbox" onChange={() => {}} checked={isChecked} />
    <p style={isChecked ? { textDecoration: 'line-through' } : {}}>{name}</p>
    <button onClick={edit}>edit</button>
    <button onClick={del}>del</button>
  </div>
;

Task.propTypes = {
  name: PropTypes.string.isRequired,
  isChecked: PropTypes.bool.isRequired,
};

export default Task;
