import React from 'react'
import InputAddElem from './InputAddElem'
import ButtonAddElem from './ButtonAddElem'

const AddElem = (props) => (
	<div>
		<InputAddElem {...props} />
		<ButtonAddElem />
	</div>
);

export default AddElem
