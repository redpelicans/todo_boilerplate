/**
 * Created by Antoine on 11/07/2016.
 */
import React from 'react'
import _ from 'lodash'
import Task from './task'

const TaskList = ({list}) => (
  <div className="todo-list">
    <h3>{list.title}</h3>
    <div className="flex-container">{_.map(list.tasks, (task =>
      <Task task={task} key={task.id} />))}
    </div>
  </div>)

export default TaskList
