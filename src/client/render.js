/**
 * Created by Antoine on 11/07/2016.
 */
import React from 'react'
import _ from 'lodash'

// A man must know how to render
const Task = ({task}) => (
  <li className="task flex-item padded">{task.id}: {task.description}</li>)

const TaskList = ({list}) => (
  <div className="todo-list">
    <h3>{list.title}</h3>
    <div className="flex-container">{_.map(list.tasks, (task =>
      <Task task={task} key={task.id} />))}
    </div>
  </div>)

const Todo = ({lists}) => {
  return (
    <div className="todo">
      {
        _.map(lists, (taskList) => (
          <TaskList list={taskList} key={taskList.id} />))
      }
    </div>
  )
}

export default Todo
