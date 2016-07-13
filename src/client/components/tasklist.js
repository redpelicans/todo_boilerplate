import React from 'react'
import Task from './task'
import ListTitle from './listtitle'
import InputTask from './inputtask'

const TaskList = ({ idList, tasks, title, onButtonSelected }) => {
  console.log({tasks});
  const data = _.map({ ...tasks }, (task) => <Task idList={ idList } idTask={ task.id } key={ task.id } onButtonSelected={ onButtonSelected } task={task.task}/>)
  console.log('tasklist :');
  console.log(data);
  return (
    <div className='tasklist'>
        <ListTitle title={ title } />
        <InputTask idList={ idList } onButtonSelected={ onButtonSelected } />
        {data}
    </div>
    )
}

TaskList.propTypes = {
  idList: React.PropTypes.number.isRequired,
  onButtonSelected: React.PropTypes.func.isRequired,
  tasks: React.PropTypes.array.isRequired,
  title: React.PropTypes.string.isRequired,
};

export default TaskList
