import React from 'react'
import InputRenameElem from './InputRenameElem'
import ButtonRenameElem from './ButtonRenameElem'

const RenameElem = (props) => (
	<div>
		<InputRenameElem {...props}/>
		<ButtonRenameElem />
	</div>
);

export default RenameElem
