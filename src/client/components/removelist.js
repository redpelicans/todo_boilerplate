import React from 'react';

const	RemoveList = ({ idList, ...actions }) => {
  const handleClick = (e) => {
    e.stopPropagation();
    actions.onRemoveList(idList);
  };
  return <button className='deleteList' onClick={ handleClick } type='button'>X</button>;
};

RemoveList.propTypes = {
  idList: React.PropTypes.string.isRequired,
};

export default RemoveList;
