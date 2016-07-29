import React from 'react';
import AppTitle from './AppTitle';
import Lists from './Lists';

const Todo = (props) => (
	<div className='Todo'>
		<AppTitle isFetching={props.isFetching} />
		<Lists {...props} />
	</div>
);

Todo.propTypes = { isFetching: React.PropTypes.number.isRequired };

export default Todo;
