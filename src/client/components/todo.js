/**
 * Created by Antoine on 11/07/2016.
 */
import React from 'react'
import _ from 'lodash'
import TaskList from './tasklist'
import NewList from './newlist';
import { connect } from 'react-redux'

const Todo = ({ lists, tasks }) => {
	return (
		<div className="todo">
		{_.map(lists, (taskList) => (
			<TaskList list={taskList} key={taskList.id}
				tasks={_.filter(tasks, t =>(
					t.listId===t.id)
				)} />))}
		</div>
	)
};

export default Todo
