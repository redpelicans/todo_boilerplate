import React from 'react'
import Task from './task'
import ListTitle from './listtitle'
import InputTask from './inputtask'

const TaskList = ({ tasks, title, onButtonSelected }) => {
  const data = tasks.map((task) => <Task key={task.id} task={task.task} onButtonSelected={onButtonSelected}/>)
  return (
    <div className='tasklist'>
        <ListTitle title={title} />
        <InputTask onButtonSelected={onButtonSelected} />
        {data}
    </div>
    )
}

TaskList.propTypes = {
  tasks: React.PropTypes.array.isRequired,
  title: React.PropTypes.string.isRequired,
};

export default TaskList
