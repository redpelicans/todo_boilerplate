import React from 'react'
import InputRenameList from './InputRenameList'
import ButtonRenameList from './ButtonRenameList'

const RenameList = (props) => (
	<div>
		<InputRenameList {...props}/>
		<ButtonRenameList />
	</div>
);

export default RenameList
