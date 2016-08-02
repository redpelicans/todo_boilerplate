/**
 * Created by Antoine on 11/07/2016.
 */
import React from 'react'
import _ from 'lodash'
import TaskList from './tasklist'

const Todo = ({ lists, tasks, handlers }) => {
  // console.warn('selector result:', getTasksByListId(443, tasks))
  // console.warn('tasks :', tasks);
  return (
  <div className='todo'>
  {_.map(lists, (taskList) => (
    <TaskList
      handlers={ handlers }
      key={ taskList.id }
      list={ taskList }
      // getTasksByListId selector
      // tasks={ getTasksByListId(taskList, tasks) } />))}
      tasks={ _.filter(tasks, t => (t.listId === taskList.id)) } />))}
  </div>
)}

Todo.propTypes = {
  handlers: React.PropTypes.object.isRequired,
  lists: React.PropTypes.array.isRequired,
  tasks: React.PropTypes.array.isRequired,
}

export default Todo
