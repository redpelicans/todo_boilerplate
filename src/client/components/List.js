import React from 'react'
import ListHeader from './ListHeader'
import Elems from './Elems'

const List = ({ list }) => (
	<div className='List'>
		<ListHeader name={list.name}/>
		<Elems elems={list.elems}/>
	</div>
);

List.propTypes = { list: React.PropTypes.object.isRequired };

export default List
