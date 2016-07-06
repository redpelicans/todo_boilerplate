import React from 'react'
import Title from './Title'
import AddTaskList from './AddTaskList'
import TaskLists from './TaskLists'

const TodoApp = (props) =>
  <div className='todo-app'>
    <Title value='Todo App' />
    <AddTaskList />
    <TaskLists {...props} />
  </div>

export default TodoApp
