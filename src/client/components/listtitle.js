import React from 'react'

const ListTitle = ({ title }) => <div className='listtitle'><h2>{ title }</h2></div>

ListTitle.propTypes = {
  title: React.PropTypes.string.isRequired,
};

export default ListTitle
