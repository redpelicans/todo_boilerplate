import React, { PropTypes } from 'react';
import Task from './task';

const TaskList = ({ actions, dispatch, tasks, todo }) =>
  <div>
    {
        Object.values(tasks).map(task =>
          <Task actions={actions} dispatch={dispatch} key={task.id} task={task} todo={todo} />)
    }
  </div>
;

TaskList.propTypes = {
  actions: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  tasks: PropTypes.object.isRequired,
  todo: PropTypes.object.isRequired,
};

export default TaskList;
