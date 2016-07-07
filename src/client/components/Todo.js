import React from 'react'
import AppTitle from './AppTitle'
import Lists from './Lists'

const Todo = (props) => (
	<div className='Todo'>
		<AppTitle />
		<Lists {...props} />
	</div>
);

export default Todo
