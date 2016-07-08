import React from 'react'
import RemoveItem from './removeitem'

const Item = ({ name }) => <li className='item'>{ name }<RemoveItem/></li>

Item.propTypes = {
  name: React.PropTypes.string.isRequired,
};

export default Item
