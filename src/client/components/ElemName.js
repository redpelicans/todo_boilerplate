import React from 'react'

const ElemName = ({ name }) => (
	<p>{name}</p>
);

ElemName.propTypes = { name: React.PropTypes.string.isRequired };

export default ElemName
