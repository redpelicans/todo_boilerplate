import React from 'react'
import ListName from './ListName'
import RenameList from './RenameList'
import ButtonDeleteList from './ButtonDeleteList'

const ListHeader = ({ name }) => (
	<div className='ListHeader'>
		<ListName name={name} />
		<RenameList />
		<ButtonDeleteList />
	</div>
);

ListHeader.propTypes = { name: React.PropTypes.string.isRequired };

export default ListHeader
