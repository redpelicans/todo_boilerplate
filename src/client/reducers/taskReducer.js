/**
 * Created by Antoine on 20/07/2016.
 */
import React from 'react'
import { ADD_TASK, DEL_TASK } from '../actions/tasks';

export default function tasks(state = [], action) {
  switch (action.type) {
  	case ADD_TASK:
  		return _.concat(state.tasks, action.task);

  	case DEL_TASK:
      return _.reject(state.tasks, (task)=>(
      	task.listID === action.listID
      	&& task.id === action.id
      ));

    default:
      return state;
  }
}
