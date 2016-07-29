import React from 'react';
import RemoveList from './removelist';

const ListTitle = ({ listId, onRemoveList, title }) =>
  <h2 className='listtitle'> { title }
    <RemoveList listId={ listId } onRemoveList={ onRemoveList } /></h2>;

ListTitle.propTypes = {
  listId: React.PropTypes.number.isRequired,
  onRemoveList: React.PropTypes.func.isRequired,
  title: React.PropTypes.string.isRequired,
};

export default ListTitle;
