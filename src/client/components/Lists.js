import React from 'react'
import List from './List'
import AddList from './AddList'

const Lists = ({ lists }) => {
  const data = lists.map((list) => <List key={list.id} list={list}/>);
  return (
		<div className='Lists'>
		{data}
		<AddList />
		</div>
  );
};

Lists.propTypes = { lists: React.PropTypes.array.isRequired };

export default Lists
