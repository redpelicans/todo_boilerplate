import React from 'react'
import Button from './Button'

const RemoveTaskList = ({ id, onRemove }) => {
  const removeHandler = (e) => {
    onRemove(id)
  }

  return (
    <Button className='rm-task-list' onClick={removeHandler}>x</Button>
  )
}

export default RemoveTaskList
