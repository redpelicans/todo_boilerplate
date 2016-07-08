import React from 'react'
import TaskList from './tasklist'

const TaskLists = ({ lists, onButtonSelected }) => {
  console.log(lists);
  const data = lists.map((list) => <TaskList {...list} key={list.id} onButtonSelected={onButtonSelected} />)
  return (
    <div className='tasklists'>
        {data}
    </div>
    )
}

TaskLists.propTypes = {
  lists: React.PropTypes.array.isRequired,
  onButtonSelected: React.PropTypes.func,
};

export default TaskLists
