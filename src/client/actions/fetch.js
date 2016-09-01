import _ from 'lodash';
import { requestJSON } from '../helpers/utils';
const R = require('ramda');
export const MADE_LISTS = 'MADE_LISTS';
export const MADE_TASKS = 'MADE_TASKS';
export const MAKING_TASKS = 'MAKING_TASKS';
export const MAKING_LISTS = 'MAKING_LISTS';

export const makeLists = (lists) => ({ type: MADE_LISTS, lists: R.indexBy(R.prop('id'), lists) });

export const makeTasks = (tasks) => ({ type: MADE_TASKS, tasks: R.indexBy(R.prop('id'), tasks) });

export const makingLists = () => ({ type: MAKING_LISTS });

export const makingTasks = () => ({ type: MAKING_TASKS });

export const fetchLists = () => {
  return (dispatch) => {
    const urlLists = 'http://localhost:3000/todo/lists';
    dispatch(makingLists());
    requestJSON(urlLists, { method: 'GET' })
    .then(lists => dispatch(makeLists(lists)));
    const urlTasks = 'http://localhost:3000/todo/tasks';
    dispatch(makingTasks());
    requestJSON(urlTasks, { method: 'GET' })
    .then(tasks => dispatch(makeTasks(tasks)));
  };
};
