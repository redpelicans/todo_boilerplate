import React, { PropTypes } from 'react';

const Task = ({ task }) =>
  <div>
    <input type="checkbox" />
    { task.name }
    <button>edit</button>
    <button>del</button>
  </div>
;

Task.propTypes = {
  task: PropTypes.object.isRequired,
};

export default Task;
