import React from 'react'

const	RemoveList = ({ idList, ...actions }) => {
  const handleClick = (e) => {
    e.stopPropagation();
    actions.removeList(idList);
  };
  return <button className='deleteList' onClick={ handleClick } type='button'>X</button>
};

RemoveList.propTypes = {
  idList: React.PropTypes.number.isRequired,
};

export default RemoveList
