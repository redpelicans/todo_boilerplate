import React from 'react'
import ElemName from './ElemName'
import RenameElem from './RenameElem'
import ButtonDeleteElem from './ButtonDeleteElem'

const Elem = ({ name }) => (
	<div>
		<ElemName name={name}/>
		<RenameElem />
		<ButtonDeleteElem />
	</div>
);

Elem.propTypes = { name: React.PropTypes.string.isRequired };

export default Elem
