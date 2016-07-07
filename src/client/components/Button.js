import React from 'react'

const Button = (props) => <button {...props}>{props.children}</button>

Button.propTypes = {
  children: React.PropTypes.string,
  props: React.PropTypes.array,
}

export default Button
