import React from 'react'

const ButtonDeleteList = ({ deleteList, id }) => {
  const handleDeleteClick = () => {
    deleteList(id);
  }
  return (
    <button onClick={handleDeleteClick}>Delete List</button>
  );
};

ButtonDeleteList.propTypes = {
  deleteList: React.PropTypes.func.isRequired,
  id: React.PropTypes.number.isRequired };

export default ButtonDeleteList
