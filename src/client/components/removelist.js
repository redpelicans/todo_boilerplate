import React from 'react';

const RemoveList = ({ listId, onRemoveList }) => {
  const handleRemoveList = (event) => {
    event.preventDefault();
    event.stopPropagation();
    onRemoveList(listId);
  };
  return (
    <div className='removelist'> <button onClick={ handleRemoveList }>x</button></div>
    );
};

RemoveList.propTypes = {
  listId: React.PropTypes.number.isRequired,
  onRemoveList: React.PropTypes.func.isRequired,
};

export default RemoveList;
