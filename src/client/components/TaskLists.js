import React from 'react'
import _ from 'lodash'
import TaskList from './TaskList'

const TaskLists = ({ lists }) => {
  const listElems = _.map(lists, (list, id) => <TaskList {...list} key={id} />)
  return (
    <div className='task-lists'>
      {listElems}
    </div>
  )
}

TaskLists.propTypes = {
  lists: React.PropTypes.object.isRequired,
}

export default TaskLists
