/**
 * Created by Antoine on 11/07/2016.
 */
import React from 'react'

// A man must know how to render
const Task = ({task}) => (
  <li className="task flex-item padded">{task.id}: {task.description}</li>);

export default Task
