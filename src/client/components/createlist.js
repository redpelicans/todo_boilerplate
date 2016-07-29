import React from 'react';

const createList = ({ listVal, onChangeList, onCreateList }) => {
  const handleCreateList = (event) => {
    event.preventDefault();
    event.stopPropagation();
    onCreateList();
  };
  const handleChangeList = (event) => {
    event.preventDefault();
    event.stopPropagation();
    onChangeList(event.target.value);
  };
  return (
    <div className='createlist'>
      <form onSubmit={ handleCreateList } >
      <input
        onChange={ handleChangeList }
        placeholder='new list'
        type='text'
        value={ listVal }
      />
      </form>
    </div>
  );
};

createList.propTypes = {
  listVal: React.PropTypes.string.isRequired,
  onChangeList: React.PropTypes.func.isRequired,
  onCreateList: React.PropTypes.func.isRequired,
};

export default createList;
