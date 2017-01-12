import React, { PropTypes } from 'react';
import Task from './task';

const TaskList = ({ actions, tasks, todo }) =>
  <div>
    {
        Object.values(tasks).map(task =>
          <Task actions={actions} key={task.id} task={task} todo={todo} />)
    }
  </div>
;

TaskList.propTypes = {
  actions: PropTypes.object.isRequired,
  tasks: PropTypes.object.isRequired,
  todo: PropTypes.object.isRequired,
};

export default TaskList;
