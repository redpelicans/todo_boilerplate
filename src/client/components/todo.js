/**
 * Created by Antoine on 11/07/2016.
 */
import React from 'react'
import _ from 'lodash'
import TaskList from './tasklist'

const Todo = ({ lists, tasks, onDelList }) => (
  <div className='todo'>
  {_.map(lists, (taskList) => (
    <TaskList key={ taskList.id }
      list={ taskList }
      onDelList={onDelList}
      tasks={ _.filter(tasks, t => (t.listId === taskList.id)) } />))}
  </div>
)

Todo.propTypes = {
  lists: React.PropTypes.array.isRequired,
  onDelList: React.PropTypes.func.isRequired,
  tasks: React.PropTypes.array.isRequired,
}

export default Todo
