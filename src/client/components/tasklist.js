import React from 'react';
import Task from './task';
import ListTitle from './listtitle';
import InputFormTask from '../components/inputformtask';
import _ from 'lodash';

const TaskList = ({ idList, label, tasks, ...actions }) => {
  const data = _.map(_.filter(tasks, (task) => (task.listId === idList)), (task, id) =>
    <Task { ...actions }
      idTask={ task.id }
      key={ Number(id) }
      task={ task.description }
    />);
  return (
    <div className='tasklist'>
        <ListTitle { ...actions } idList={ idList } label={ label } />
        <InputFormTask
          idList={ idList }
          onSubmitAddTask={ actions.onSubmitAddTask }
        />
        {data}
    </div>
    );
};

TaskList.propTypes = {
  idList: React.PropTypes.number,
  label: React.PropTypes.string,
  tasks: React.PropTypes.array,
};

export default TaskList;
