export const FETCHING = 'FETCHING';
export const FETCHED = 'FETCHED';

export const fetching = () => ({
  type: FETCHING,
  isFetching: true,
});

export const fetched = () => ({
  type: FETCHED,
  isFetching: false,
});
