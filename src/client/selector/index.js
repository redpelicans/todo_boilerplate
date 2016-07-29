import { createSelector } from 'reselect';
import _ from 'lodash';

const listSelector = state => state.lists;
const textSelector = state => state.lists.label;

const sortAlpha = (state, text) => {
  _.sortBy(state, text);
};


export const sortAlphaSelector = createSelector(
  [listSelector, textSelector],
  sortAlpha(listSelector, textSelector)
  );
