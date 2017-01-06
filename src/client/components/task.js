import React, { PropTypes } from 'react';

const Task = ({ actions, dispatch, task, todo }) =>
  <div>
    <input type="checkbox" />
    { task.name }
    <button>edit</button>
    <button onClick={() => dispatch(actions.deleteTask(todo.id, task.id))}>del</button>
  </div>
;

Task.propTypes = {
  actions: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  task: PropTypes.object.isRequired,
  todo: PropTypes.object.isRequired,
};

export default Task;
