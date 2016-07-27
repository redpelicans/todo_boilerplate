/**
 * Created by Antoine on 20/07/2016.
 */
import _ from 'lodash'
import { ADD_TASK, DEL_TASK, GOT_TASKS } from '../actions/tasks'
import { DEL_LIST } from '../actions/lists'

export default function tasks(state = [], action) {
  switch (action.type) {
  case ADD_TASK:
    return _.concat(state, action.task);

  case DEL_TASK:
    return _.reject(state, task => (
     task.id === parseInt(action.id)));

  case DEL_LIST:
    return _.reject(state, task => (
     task.listId === parseInt(action.id)));

  case GOT_TASKS:
    return _.map(action.tasks, t => (
      { ...t, key: t.id }));

  default:
    return state;
  }
}
