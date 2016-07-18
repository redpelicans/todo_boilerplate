import React from 'react'

const createList = ({ listVal, onCreateList, updateVal }) => {
  const handleCreateList = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      event.stopPropagation();
      onCreateList(event.target.value);
    }
    else {
      event.preventDefault();
      event.stopPropagation();
      updateVal(event.key);
    }
  };

  return (
    <div className='createlist'>
    <input onKeyDown={ handleCreateList } placeholder='new' type='text' value={ listVal } />
    </div>
    );
};

createList.propTypes = {
  listVal: React.PropTypes.string.isRequired,
  onCreateList: React.PropTypes.func.isRequired,
  updateVal: React.PropTypes.func.isRequired,
};

export default createList
