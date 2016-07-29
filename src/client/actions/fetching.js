require('isomorphic-fetch');

export const IS_FETCHING = 'IS_FETCHING';
export const FINISHED_FETCHING = 'FINISHED_FETCHING';

export const doFetch = (url, options) => (fetch(url, options).catch(console.warn));

export const isFetching = () => ({ type: IS_FETCHING });

export const finishedFetching = () => ({ type: FINISHED_FETCHING });
