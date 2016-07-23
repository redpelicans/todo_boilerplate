/**
 * Created by Antoine on 11/07/2016.
 */
import React from 'react'
import _ from 'lodash'
import Task from './task'

const TaskList = ({ list, tasks }) => (
  <div className='todo-list'>
    <h3>{list.title}</h3>
    <div className='flex-container'>
    {_.map(tasks, (task =>
      <Task key={task.id} task={task} />))}
    </div>
  </div>
)

TaskList.propTypes = {
  list: React.PropTypes.object.isRequired,
  tasks: React.PropTypes.array.isRequired,
}

export default TaskList
