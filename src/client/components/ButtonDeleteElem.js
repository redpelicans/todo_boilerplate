import React from 'react'

const ButtonDeleteElem = ({ deleteElem, id, idList }) => {
  const handleDeleteClick = () => {
    deleteElem(id, idList);
  }
  return (
    <button onClick={handleDeleteClick}>Delete Task</button>
  );
};

ButtonDeleteElem.propTypes = {
  deleteElem: React.PropTypes.func.isRequired,
  id: React.PropTypes.number.isRequired,
  idList: React.PropTypes.number.isRequired };

export default ButtonDeleteElem
