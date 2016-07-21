/**
 * Created by Antoine on 19/07/2016.
 */
import _ from 'lodash'
import { ADD_LIST, DEL_LIST } from '../actions/lists'

export const listReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_LIST:
      return _.concat(state.lists, action.list);
    case DEL_LIST:
      return _.reject(state.lists, (list)=>(
      list.id === action.id));
    default:
      return state;
  }
};

export default listReducer
