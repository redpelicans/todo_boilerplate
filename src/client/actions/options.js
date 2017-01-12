export const SHOW_COMPLETED = 'filters/showCompleted';
export const SORT_BY_ASC = 'filters/sortByAsc';

const showCompleted = () => ({
  type: SHOW_COMPLETED,
});

const sortByAsc = () => ({
  type: SORT_BY_ASC,
});

export default { showCompleted, sortByAsc };
