import React from 'react';
import Task from './task';
import ListTitle from './listtitle';
import InputFormTask from '../components/inputformtask';
import _ from 'lodash';

const TaskList = ({ idList, inputtask, tasks, title, ...actions }) => {
  const data = _.map(_.filter(tasks, (task) => (task.idList === idList)), (task, id) =>
    <Task { ...actions }
      idTask={ task.id }
      key={ Number(id) }
      task={ task.task }
    />);
  return (
    <div className='tasklist'>
        <ListTitle { ...actions } idList={ idList } title={ title } />
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
  tasks: React.PropTypes.object,
  title: React.PropTypes.string,
};

export default TaskList;
