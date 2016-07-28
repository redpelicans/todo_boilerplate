import { requestJSON } from '../helpers/utils';
import { removeTask } from './task';
export const ADD_LIST = 'ADD_LIST';
export const REMOVE_LIST = 'REMOVE_LIST';
export const REMOVED_LIST = 'REMOVED_LIST';
export const CHANGE_LIST = 'CHANGE_LIST';
export const LIST_ADDED = 'LIST_ADDED';
export const ADDING_LIST = 'ADDING_LIST';
export const REMOVING_LIST = 'REMOVING_LIST';

export const listAdded = (list) => ({ type: LIST_ADDED, list });

export const addingList = () => ({ type: ADDING_LIST });

export const changeList = (inputlist) => ({ type: CHANGE_LIST, inputlist });

export const removedList = (idList) => ({ type: REMOVED_LIST, idList });

export const removingList = () => ({ type: REMOVING_LIST });

export const removeList = (idList) => {
  return (dispatch, getState) => {
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      }
    };
    dispatch(removingList());
    const url = `http://rp4.redpelicans.com:13004/api/todo/list/${idList}`;
    requestJSON(url, options)
    .then(dispatch(removedList(idList)));
    const { tasks } = getState();
    const linkedTasks = _.find(tasks, ['listId', idList]);
    _.map(linkedTasks, (task) => (dispatch(removeTask(task.id))));
  };
};

export const addList = (input) => {
  return (dispatch, getState) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      }
    };
    dispatch(addingList());
    options.body = JSON.stringify({ todo: { label: input } });
    const url = 'http://rp4.redpelicans.com:13004/api/todo/lists'
    requestJSON(url, options)
    .then(todo => dispatch(listAdded(todo)));
  };
};