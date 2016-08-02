/**
 * Created by Antoine on 19/07/2016.
 */
import _ from 'lodash'
import { ADD_LIST, DEL_LIST, GOT_LISTS } from '../actions/lists'
import { ADD_TASK, INPUT_TASK } from '../actions/tasks'

export default function lists(state = [], action) {
  switch (action.type) {
  case ADD_LIST:
    return _.concat(state, action.list);

  case DEL_LIST:
    return _.reject(state, list => (
     list.id === parseInt(action.id)));

  case ADD_TASK:
    return _.map(state, list => (
      list.id === parseInt(action.id) ?
        list : _.create(list, { input: '' })))

  case INPUT_TASK:
    return _.map(state, list => (
      (list.id === parseInt(action.id)) ?
        _.create(list, { input: action.input }) : list))

  case GOT_LISTS:
    return _.map(action.lists, l => ({ ...l, key: l.id, input: '' }));

  default:
    return state;
  }
}
