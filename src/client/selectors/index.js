import { createSelector } from 'reselect';
import _ from 'lodash';

const listSelector = state => state.lists;
const taskSelector = state => state.tasks;

const sortListAlpha = (lists) => (
  _.sortBy(lists, 'label')
);

const sortTaskAlpha = (tasks) => (
  _.sortBy(tasks, 'description')
);

export const sortAlphaListSelector = createSelector(
  [listSelector],
  lists => sortListAlpha(lists)
);

export const sortAlphaTaskSelector = createSelector(
  [taskSelector],
  tasks => sortTaskAlpha(tasks)
);
