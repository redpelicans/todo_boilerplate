/**
 * Created by Antoine on 11/07/2016.
 */
import React from 'react'
import _ from 'lodash'
import ListHead from './listhead'
import Task from './task'

const TaskList = ({ list, tasks, onDelList }) => (
  <div className='todo-list'>
    <ListHead
      id={list.id}
      onDelList={onDelList}
      title={list.title} />
    <div className='flex-container'>
    {_.map(tasks, (task =>
      <Task key={task.id} task={task} />))}
    </div>
  </div>
)

TaskList.propTypes = {
  list: React.PropTypes.object.isRequired,
  onDelList: React.PropTypes.func.isRequired,
  tasks: React.PropTypes.array.isRequired,
}

export default TaskList
