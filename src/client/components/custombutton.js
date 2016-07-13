import React from 'react'

const	CustomButton = ({ idList, idTask, message, name, type, onButtonSelected }) => {
  const handleClick = (e) => {
    e.stopPropagation();
    console.log(idList);
    console.log(idTask);
    onButtonSelected(e, idList, idTask);
  };
  return <button className={name} onClick={handleClick} type={type}>{message}</button>
};

CustomButton.propTypes = {
  message: React.PropTypes.string.isRequired,
  name: React.PropTypes.string,
  onButtonSelected: React.PropTypes.func,
  type: React.PropTypes.string,
};

CustomButton.defaultProps = {
  message: '',
  name: 'button',
  type: 'button',
};

export default CustomButton
