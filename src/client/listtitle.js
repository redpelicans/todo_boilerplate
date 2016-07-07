import React from 'react'

const ListTitle = ({ title }) => <h2>{title}</h2>

ListTitle.propTypes = { title: React.PropTypes.string.isRequired };

export default ListTitle
