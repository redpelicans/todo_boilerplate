import { createSelector } from 'reselect';
import _ from 'lodash';

const getLists = state => (state.lists);
const getTasks = state => (state.tasks);

export const getAlphaSortLists = createSelector(
  [getLists],
  (lists) => (_.sortBy(lists, (list) => (list.label))));

export const getAlphaSortTasks = createSelector(
  [getTasks],
  (tasks) => (_.sortBy(tasks, (task) => (task.description))));
