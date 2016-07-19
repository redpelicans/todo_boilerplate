import React from 'react'
import _ from 'lodash'
import List from './List'
import AddList from './AddList'

const Lists = ({ lists, functions }) => {
  const data = _.map(lists, (list, id) => (<List functions={functions} id={Number(id)} key={id} list={list} />));
  return (
		<div className='Lists'>
		{data}
		<AddList addList={functions.addList} />
		</div>
  );
};

Lists.propTypes = {
  functions: React.PropTypes.object.isRequired,
  lists: React.PropTypes.object.isRequired };

export default Lists
