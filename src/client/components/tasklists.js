import React from 'react'
import TaskList from './tasklist'
import _ from 'lodash'

const TaskLists = ({ lists, ...actions }) => {
  const data = _.map(lists, (list) => (<TaskList { ...actions } { ...list } idList={ list.id } key={ list.id } />))
  return (
    <div className='tasklists'>
      {data}
    </div>
  )
};

TaskLists.propTypes = {
  lists: React.PropTypes.array.isRequired,
};

export default TaskLists
