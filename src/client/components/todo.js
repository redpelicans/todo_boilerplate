/**
 * Created by Antoine on 11/07/2016.
 */
import React from 'react'
import _ from 'lodash'
import TaskList from './tasklist'

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
