/**
 * Created by Antoine on 11/07/2016.
 */
import React from 'react'
import _ from 'lodash'
import TaskList from './tasklist'

const Todo = ({ lists, tasks, ...handlers }) => (
  <div className='todo'>
  {_.map(lists, (taskList) => (
    <TaskList
      handlers={ handlers }
      key={ taskList.id }
      list={ taskList }
      tasks={ _.filter(tasks, t => (t.listId === taskList.id)) } />))}
  </div>
)

Todo.propTypes = {
  lists: React.PropTypes.array.isRequired,
  onDelList: React.PropTypes.func.isRequired,
  tasks: React.PropTypes.array.isRequired,
}

export default Todo
