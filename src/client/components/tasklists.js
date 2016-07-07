import React from 'react'
import TaskList from './tasklist'

const TaskLists = ({ lists }) => {
  const data = lists.map((list) => <TaskList {...list} key={list.id} />)
  return (
    <div className='tasklists'>
        {data}
    </div>
    )
}

TaskLists.propTypes = {
  lists: React.PropTypes.array.isRequired,
};

export default TaskLists
