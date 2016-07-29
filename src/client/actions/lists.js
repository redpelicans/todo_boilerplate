import _ from 'lodash';
import { doFetch, isFetching, finishedFetching } from './fetching';

export const ADD_LIST = 'ADD_LIST';
export const FETCHED_LISTS = 'FETCHED_LISTS';
export const ADDED_LIST = 'ADDED_LIST';
export const DELETED_LIST = 'DELETED_LIST';
export const RENAMED_LIST = 'RENAMED_LIST';

const url = 'http://rp4.redpelicans.com:13004/api/todo/lists';

const headers = { 'Accept': 'application/json', 'Content-Type': 'application/json' };

export const addedList = (id, name) => ({ type: ADDED_LIST, id, name });

export const addList = (newlist) => (
  (dispatch) => {
    dispatch(isFetching());
    return (
      doFetch(url, { method: 'POST', headers,
      body: JSON.stringify({ todo: { label: newlist } }) })
      .then(response => response.json())
      .then(response => dispatch(addedList(response.id, newlist)))
      .then(() => dispatch(finishedFetching()))
    );
  }
);

export const fetchedLists = (lists) => ({ type: FETCHED_LISTS, lists: _.keyBy(lists, (list) => list.id) });

export const deletedList = (id) => ({ type: DELETED_LIST, id });

export const deleteList = (id) => (
  (dispatch) => {
    dispatch(isFetching());
    return (
      fetch(`http://rp4.redpelicans.com:13004/api/todo/list/${id}`, { method: 'DELETE', headers })
      .then(dispatch(deletedList(id)))
      .then(() => dispatch(finishedFetching()))
    );
  }
);

export const renamedList = (id, newname) => ({ type: RENAMED_LIST, id, newname });

export const renameList = (id, newname) => (
  (dispatch) => {
    dispatch(isFetching());
    return (
      doFetch(url, { method: 'PUT', headers,
      body: JSON.stringify({ todo: { id, label: newname } }) })
      .then(dispatch(renamedList(id, newname)))
      .then(() => dispatch(finishedFetching()))
    );
  }
);

export const fetchLists = () => (
  (dispatch) => {
    dispatch(isFetching());
    return (
      doFetch(url, { method: 'GET', headers })
      .then(response => response.json())
      .then(lists => dispatch(fetchedLists(lists)))
      .then(() => dispatch(finishedFetching()))
    );
  }
);
