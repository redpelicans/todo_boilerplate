/**
 * Created by Antoine on 11/07/2016.
 */
import React from 'react'
import _ from 'lodash'
import Task from './task'

const TaskList = ({ list, tasks }) => {
	const	listTasks = _.filter(tasks, (t)=>(t.listId === list.id));

	return(
		<div className="todo-list">
			<h3>{list.title}</h3>
			<div className="flex-container">
			{_.map(listTasks, (task => 
				<Task task={task} key={task.id} />))}
			</div>
		</div>
	);
}

export default TaskList
