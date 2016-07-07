import React from 'react'
import Task from './Task'
import AddTask from './AddTask'
import TaskListTitle from './TaskListTitle'
import RemoveTaskList from './RemoveTaskList'

const TaskList = ({ title, tasks }) => {
  const taskElems = tasks.map((task) => <Task key={task.id} text={task.text} />)
  return (
    <div className='task-list'>
      <header>
        <TaskListTitle value={title} />
        <RemoveTaskList />
      </header>
      <div className='tasks'>
        {taskElems}
      </div>
      <AddTask />
    </div>
  )
}

TaskList.propTypes = {
  tasks: React.PropTypes.arrayOf(React.PropTypes.object),
  title: React.PropTypes.string,
}

export default TaskList
