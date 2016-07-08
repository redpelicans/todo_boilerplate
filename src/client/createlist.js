import React from 'react'
import TodoApp from './app'

const CreateList = ({createListClick}) => {
	const appelCreateListClick = (event) => {
		console.log("LOL");
		event.preventDefault();
		createListClick('lol');
		event.stopPropagation();
		
	};
	
	return (
	<div className='createlist'>
		<form>
			<input type='text'/>
			<button onClick={appelCreateListClick}>Add</button>
		</form>
	</div>
	);
};

CreateList.propTypes = {
  createListClick: React.PropTypes.func.isRequired,
};

export default CreateList


