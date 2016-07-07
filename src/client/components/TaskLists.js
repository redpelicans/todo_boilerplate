import React from 'react'
import TaskList from './TaskList'

const TaskLists = ({ lists }) => {
  const listElems = lists.map((list) => <TaskList {...list} key={list.id} />)
  return (
    <div className='task-lists'>
      {listElems}
    </div>
  )
}

TaskLists.propTypes = {
  lists: React.PropTypes.arrayOf(React.PropTypes.object),
}

export default TaskLists
