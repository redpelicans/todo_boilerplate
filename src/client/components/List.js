import React from 'react';
import ListHeader from './ListHeader';
import Elems from './Elems';

const List = (props) => (
  <div className='List'>
    <ListHeader
      id={props.id}
      list={props.list}
      onDeleteList={props.onDeleteList}
      onEnableRenameList={props.onEnableRenameList}
      onInputRenameList={props.onInputRenameList}
      onRenameList={props.onRenameList} />
    <Elems
      elems={props.elems}
      idList={props.id}
      onAddElem={props.onAddElem}
      onDeleteElem={props.onDeleteElem}
      onDoneElem={props.onDoneElem}
      onEnableRenameElem={props.onEnableRenameElem}
      onInputAddElem={props.onInputAddElem}
      onInputRenameElem={props.onInputRenameElem}
      onRenameElem={props.onRenameElem} />
  </div>
);

List.propTypes = {
  elems: React.PropTypes.object.isRequired,
  id: React.PropTypes.number.isRequired,
  list: React.PropTypes.object.isRequired,
  onAddElem: React.PropTypes.func.isRequired,
  onDeleteElem: React.PropTypes.func.isRequired,
  onDeleteList: React.PropTypes.func.isRequired,
  onDoneElem: React.PropTypes.func.isRequired,
  onEnableRenameElem: React.PropTypes.func.isRequired,
  onEnableRenameList: React.PropTypes.func.isRequired,
  onInputAddElem: React.PropTypes.func.isRequired,
  onInputRenameElem: React.PropTypes.func.isRequired,
  onInputRenameList: React.PropTypes.func.isRequired,
  onRenameElem: React.PropTypes.func.isRequired,
  onRenameList: React.PropTypes.func.isRequired };

export default List;
