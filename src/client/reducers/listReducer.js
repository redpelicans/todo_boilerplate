/**
 * Created by Antoine on 19/07/2016.
 */
import _ from 'lodash'
import { ADD_LIST, DEL_LIST } from '../actions/lists'

export default function lists(state = [], action) {
  switch (action.type) {
  case ADD_LIST:
    return _.concat(state, action.list);

  case DEL_LIST:
    return _.reject(state, (list) => (
     list.id === action.id));

  default:
    return state;
  }
}
