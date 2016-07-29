import React from 'react';
import _ from 'lodash';
import List from './List';
import AddList from './AddList';

const Lists = (props) => {
  const lists = _.omitBy(props.lists, (list, id) => (id === 'addlist'));
  const data = _.map(lists, (list, id) => (
    <List
      elems={props.elems}
      id={Number(id)}
      key={id}
      list={list}
      onAddElem={props.onAddElem}
      onDeleteElem={props.onDeleteElem}
      onDeleteList={props.onDeleteList}
      onDoneElem={props.onDoneElem}
      onEnableRenameElem={props.onEnableRenameElem}
      onEnableRenameList={props.onEnableRenameList}
      onInputAddElem={props.onInputAddElem}
      onInputRenameElem={props.onInputRenameElem}
      onInputRenameList={props.onInputRenameList}
      onRenameElem={props.onRenameElem}
      onRenameList={props.onRenameList} />));
  return (
    <div className='Lists'>
      {data}
      <AddList
        addlist={props.lists.addlist}
        onAddList={props.onAddList}
        onInputAddList={props.onInputAddList} />
    </div>
  );
};

Lists.propTypes = {
  elems: React.PropTypes.object.isRequired,
  lists: React.PropTypes.object.isRequired,
  onAddElem: React.PropTypes.func.isRequired,
  onAddList: React.PropTypes.func.isRequired,
  onDeleteElem: React.PropTypes.func.isRequired,
  onDeleteList: React.PropTypes.func.isRequired,
  onDoneElem: React.PropTypes.func.isRequired,
  onEnableRenameElem: React.PropTypes.func.isRequired,
  onEnableRenameList: React.PropTypes.func.isRequired,
  onInputAddElem: React.PropTypes.func.isRequired,
  onInputAddList: React.PropTypes.func.isRequired,
  onInputRenameElem: React.PropTypes.func.isRequired,
  onInputRenameList: React.PropTypes.func.isRequired,
  onRenameElem: React.PropTypes.func.isRequired,
  onRenameList: React.PropTypes.func.isRequired };

export default Lists;
