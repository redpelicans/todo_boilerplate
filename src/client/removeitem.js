import React from 'react'

const RemoveItem = ({removeItemClick}) => {
  const appelRemoveItemClick = (event) => {
  	event.preventDefault();
  	removeItemClick('lol');
  	event.stopPropagation();

  }
	return (
 		<button onClick={appelRemoveItemClick}>x</button>
 	);
}

RemoveItem.propTypes = {
  removeItemClick: React.PropTypes.func.isRequired,
};

export default RemoveItem
