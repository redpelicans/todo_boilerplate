import React from 'react'
import Task from './task'
import ListTitle from './listtitle'
import _ from 'lodash'

const TaskList = ({ idList, tasks, title, ...actions }) => {
  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      actions.createTask(idList, e.target.value);
    }
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
          onKeyPress={ handleEnter }
          placeholder='New task...'
          type='text' />
        {data}
    </div>
    )
}

TaskList.propTypes = {
  idList: React.PropTypes.number.isRequired,
  tasks: React.PropTypes.array.isRequired,
  title: React.PropTypes.string.isRequired,
};

export default TaskList
