import React from 'react'
import ElemName from './ElemName'
import RenameElem from './RenameElem'
import ButtonDeleteElem from './ButtonDeleteElem'

const Elem = ({ functions, id, idList, name }) => (
	<div>
		<ElemName name={name}/>
		<RenameElem id={id} idList={idList} renameElem={functions.renameElem} />
		<ButtonDeleteElem deleteElem={functions.deleteElem} id={id} idList={idList} />
	</div>
)

Elem.propTypes = {
  functions: React.PropTypes.object.isRequired,
  id: React.PropTypes.number.isRequired,
  idList: React.PropTypes.number.isRequired,
  name: React.PropTypes.string.isRequired };

export default Elem
