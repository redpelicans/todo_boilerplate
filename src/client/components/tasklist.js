import React from 'react'
import Task from './task'
import ListTitle from './listtitle'
import _ from 'lodash'

const TaskList = ({ idList, inputtask, tasks, title, ...actions }) => {
  const handleKeyTask = (e) => {
    actions.handleTask(e.key, idList);
  };
  const data = _.map({ ...tasks }, (task) =>
    <Task { ...actions }
      idList={ idList }
      idTask={ task.id }
      key={ task.id }
      task={ task.task }
    />)
  return (
    <div className='tasklist'>
        <ListTitle { ...actions } idList={ idList } title={ title } />
        <input
          className='create-task'
          onKeyDown={ handleKeyTask }
          placeholder='New task...'
          type='text'
          value={ inputtask }
        />
        {data}
    </div>
    )
}

TaskList.propTypes = {
  idList: React.PropTypes.number.isRequired,
  inputtask: React.PropTypes.string,
  tasks: React.PropTypes.array.isRequired,
  title: React.PropTypes.string.isRequired,
};

export default TaskList
