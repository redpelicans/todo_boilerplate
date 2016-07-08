import React from 'react'
import _ from 'lodash'
import Task from './Task'
import AddTask from './AddTask'
import TaskListTitle from './TaskListTitle'
import RemoveTaskList from './RemoveTaskList'

const TaskList = ({ title, tasks }) => {
  const taskElems = _.map(tasks, (task, id) => <Task key={id} text={task.text} />)
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
  tasks: React.PropTypes.object.isRequired,
  title: React.PropTypes.string.isRequired,
}

export default TaskList
