import { createSelector } from 'reselect';

const getTasks = state => state.tasks;
const getLists = state => state.lists;

export const getProps = createSelector(
  getTasks,
  getLists,
  (tasks, lists) => ({ tasks, lists }),
);
