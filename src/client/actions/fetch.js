import _ from 'lodash';
import { requestJSON } from '../helpers/utils'

export const MADE_LISTS = 'MADE_LISTS';
export const MADE_TASKS = 'MADE_TASKS';
export const MAKING_TASKS = 'MAKING_TASKS';
export const MAKING_LISTS = 'MAKING_LISTS';

export const makeLists = (lists) => ({ type: MADE_LISTS, lists: _.keyBy(lists, 'id') });

export const makeTasks = (tasks) => ({ type: MADE_TASKS, tasks: _.keyBy(tasks, 'id') });

export const makingLists = () => ({ type: MAKING_LISTS });

export const makingTasks = () => ({ type: MAKING_TASKS });

export const fetchLists = () => {
  return (dispatch) => {
    const urlLists = 'http://rp4.redpelicans.com:13004/api/todo/lists';

    dispatch(makingLists());

    requestJSON(urlLists, { method: 'GET' })
    .then(lists => dispatch(makeLists(lists)));

    const urlTasks = 'http://rp4.redpelicans.com:13004/api/todo/tasks';

    dispatch(makingTasks());

    requestJSON(urlTasks, { method: 'GET' })
    .then(tasks => dispatch(makeTasks(tasks)));
  };
};
