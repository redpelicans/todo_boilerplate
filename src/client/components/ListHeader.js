import React from 'react'
import ListName from './ListName'
import RenameList from './RenameList'
import ButtonDeleteList from './ButtonDeleteList'

const ListHeader = ({ functions, id, name }) => (
	<div className='ListHeader'>
		<ListName name={name} />
		<RenameList id={id} renameList={functions.renameList} />
		<ButtonDeleteList deleteList={functions.deleteList} id={id} />
	</div>
);

ListHeader.propTypes = {
  functions: React.PropTypes.object.isRequired,
  id: React.PropTypes.number.isRequired,
  name: React.PropTypes.string.isRequired }

export default ListHeader
