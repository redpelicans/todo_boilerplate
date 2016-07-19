import React from 'react'
import ListHeader from './ListHeader'
import Elems from './Elems'

const List = ({ functions, id, list }) => (
	<div className='List'>
		<ListHeader functions={functions} id={id} name={list.name} />
		<Elems elems={list.elems} functions={functions} idList={id} />
	</div>
);

List.propTypes = {
  functions: React.PropTypes.object.isRequired,
  id: React.PropTypes.number.isRequired,
  list: React.PropTypes.object.isRequired };

export default List
