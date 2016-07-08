import React from 'react'

const	CustomButton = ({ message, name, type, onButtonSelected }) => {
  const handleClick = (e) => {
  	e.stopPropagation();
  	onButtonSelected(name);
  };
  return <button type={type} onClick={handleClick}>{message}</button>
};

CustomButton.propTypes = {
  message: React.PropTypes.string.isRequired,
  name: React.PropTypes.string,
  type: React.PropTypes.string,
};

CustomButton.defaultProps = {
  message: '',
  name: 'button',
  type: 'button',
};

export default CustomButton
