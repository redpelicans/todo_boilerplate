import React from 'react'
import TaskList from './tasklist'

const TaskLists = ({ lists, onButtonSelected }) => {
console.log(lists);
  const data = _.map(lists, (list) => (<TaskList { ...list } idList={ list.id } key={ list.id } onButtonSelected={ onButtonSelected } />))
  console.log('tasklistS :');
  console.log(data);
  return (
  	<div className='tasklists'>
        {data}
  	</div>
  	)
}

TaskLists.propTypes = {
  lists: React.PropTypes.array.isRequired,
  onButtonSelected: React.PropTypes.func.isRequired,
};

export default TaskLists
