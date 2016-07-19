import React from 'react'
import InputAddList from './InputAddList'
import ButtonAddList from './ButtonAddList'

const AddList = (props) => (
	<div className='List'>
		<InputAddList {...props} />
		<ButtonAddList />
	</div>
);

export default AddList
