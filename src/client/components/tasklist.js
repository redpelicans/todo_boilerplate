import React from 'react';
import Task from './task';
import ListTitle from './listtitle';
import InputFormTask from '../components/inputformtask';
import _ from 'lodash';

const TaskList = ({ idList, inputtask, label, tasks, ...actions }) => {
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
          value={ inputtask }
          { ...actions }
        />
        {data}
    </div>
    );
};

TaskList.propTypes = {
  idList: React.PropTypes.number,
  inputtask: React.PropTypes.string,
  label: React.PropTypes.string,
};

export default TaskList;
