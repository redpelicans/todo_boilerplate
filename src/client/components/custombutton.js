import React from 'react'

const	CustomButton = ({ message, name, type }) => <button className={name} type={type} onClick={onButtonSelected}>{message}</button>

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
