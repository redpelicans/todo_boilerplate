import React from 'react';
import TaskList from './tasklist';
import _ from 'lodash';

const TaskLists = ({ lists, tasks, ...actions }) => {
  const data = _.map(lists, (list, id) => (
  <TaskList
    idList={ list.id }
    inputtask={ list.inputtask }
    key={ Number(id) }
    tasks={ tasks }
    title={ list.title }
    { ...actions }
  />)
  );
  return (
    <div className='tasklists'>
      {data}
    </div>
  );
};

TaskLists.propTypes = {
  lists: React.PropTypes.object,
  tasks: React.PropTypes.object,
};

export default TaskLists;
