import React from 'react'
import TodoApp from './app'
import RemoveItem from './removeitem'

const Item = ({ name, removeItemClick }) => <li className='item'>{ name }<RemoveItem removeItemClick={removeItemClick} /></li>

Item.propTypes = {
  name: React.PropTypes.string.isRequired,
  removeItemClick: React.PropTypes.func.isRequired,
  
  
};

export default Item
