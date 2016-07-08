import React from 'react'

const	CustomButton = ({ message, name, type, onButtonSelected }) => {
  const handleClick = (e) => {
    e.stopPropagation();
    onButtonSelected(name);
  };
  return <button onClick={handleClick} type={type}>{message}</button>
};

CustomButton.propTypes = {
  message: React.PropTypes.string.isRequired,
  name: React.PropTypes.string,
  onButtonSelected: React.PropTypes.object,
  type: React.PropTypes.string,
};

CustomButton.defaultProps = {
  message: '',
  name: 'button',
  type: 'button',
};

export default CustomButton
