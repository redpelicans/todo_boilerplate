import { createSelector } from 'reselect';
import _ from 'lodash';

const listSelector = state => state.lists;
const taskSelector = state => state.tasks;

const sortListsAlpha = (lists) => (
  _.sortBy(lists, 'label')
);

const sortTasksAlpha = (tasks) => (
  _.sortBy(tasks, 'description')
);

export const sortListsSelector = createSelector(
  [listSelector],
  lists => sortListsAlpha(lists)
);

export const sortTasksSelector = createSelector(
  [taskSelector],
  tasks => sortTasksAlpha(tasks)
);
