import React from 'react';
import RemoveList from './removelist';

const ListTitle = ({ title, idList, ...actions }) =>
  <div className='listtitle'>
    <h2>
    { title }
    <RemoveList { ...actions } idList={ idList } />
    </h2>
  </div>;

ListTitle.propTypes = {
  idList: React.PropTypes.number.isRequired,
  title: React.PropTypes.string.isRequired,
};

export default ListTitle;
