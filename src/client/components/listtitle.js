import React from 'react';
import RemoveList from './removelist';

const ListTitle = ({ label, idList, ...actions }) =>
  <div className='listtitle'>
    <h2>
    { label }
    <RemoveList { ...actions } idList={ idList } />
    </h2>
  </div>;

ListTitle.propTypes = {
  idList: React.PropTypes.number.isRequired,
  label: React.PropTypes.string.isRequired,
};

export default ListTitle;
