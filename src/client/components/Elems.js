import React from 'react'
import Elem from './Elem'
import AddElem from './AddElem'

const Elems = ({ elems }) => {
  const data = elems.map((elem) => <Elem key={elem.id} name={elem.name}/>);
  return (
		<div className='Elems'>
			{data}
			<AddElem />
		</div>
  );
};

Elems.propTypes = { elems: React.PropTypes.array.isRequired };

export default Elems
