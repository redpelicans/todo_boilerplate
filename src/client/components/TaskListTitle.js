import React from 'react'

const TaskListTitle = ({ value }) => <h2>{value}</h2>

TaskListTitle.propTypes = {
  value: React.PropTypes.string,
}

export default TaskListTitle
