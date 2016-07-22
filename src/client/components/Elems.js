import React from 'react';
import _ from 'lodash';
import Elem from './Elem';
import AddElem from './AddElem';

const Elems = (props) => {
  const addelem = (_.has(props.elems.addelem, props.idList)) ? props.elems.addelem[props.idList] : '';
  const data = _.map(_.omitBy(props.elems, (elem, id) =>
    ((elem.idlist !== props.idList) || (id === 'addelem'))), (elem, id) => (
        <Elem
          elem={elem}
          id={Number(id)}
          key={id}
          onDeleteElem={props.onDeleteElem}
          onDoneElem={props.onDoneElem}
          onEnableRenameElem={props.onEnableRenameElem}
          onInputRenameElem={props.onInputRenameElem}
          onRenameElem={props.onRenameElem} />));
  return (
    <div className='Elems'>
      {data}
      <AddElem
        addelem={addelem}
        id={props.idList}
        onAddElem={props.onAddElem}
        onInputAddElem={props.onInputAddElem} />
    </div>
  );
};

Elems.propTypes = {
  elems: React.PropTypes.object.isRequired,
  idList: React.PropTypes.number.isRequired,
  onAddElem: React.PropTypes.func.isRequired,
  onDeleteElem: React.PropTypes.func.isRequired,
  onDoneElem: React.PropTypes.func.isRequired,
  onEnableRenameElem: React.PropTypes.func.isRequired,
  onInputAddElem: React.PropTypes.func.isRequired,
  onInputRenameElem: React.PropTypes.func.isRequired,
  onRenameElem: React.PropTypes.func.isRequired };

export default Elems;
