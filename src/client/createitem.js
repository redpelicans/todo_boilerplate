import React from 'react'

const createItem = ({ listId, onCreateTask }) => {
  const handleCreate = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      event.stopPropagation();
      onCreateTask(listId, event.target.value);
    }
  };

  return (
    <div className='createitem'>
    <input onKeyPress={handleCreate} placeholder='new' type='text' />
    </div>
    );
};

createItem.propTypes = {
  listId: React.PropTypes.number.isRequired,
  onCreateTask: React.PropTypes.func.isRequired,
};

export default createItem
