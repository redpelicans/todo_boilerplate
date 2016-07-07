import React from 'react'

const ListName = ({ name }) => (
	<div className='ListName'><h2>{name}</h2></div>
);

ListName.propTypes = { name: React.PropTypes.string.isRequired };

export default ListName
