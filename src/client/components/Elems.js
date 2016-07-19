import React from 'react'
import _ from 'lodash'
import Elem from './Elem'
import AddElem from './AddElem'

const Elems = ({ elems, functions, idList }) => {
  const data = _.map(elems, (elem, id) => (
    <Elem
      functions={functions}
      id={Number(id)}
      idList={idList}
      key={id}
      name={elem.name} />));
  return (
		<div className='Elems'>
			{data}
			<AddElem addElem={functions.addElem} id={idList} />
		</div>
  );
};

Elems.propTypes = {
  elems: React.PropTypes.object.isRequired,
  functions: React.PropTypes.object.isRequired,
  idList: React.PropTypes.number.isRequired };

export default Elems
