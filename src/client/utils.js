import 'whatwg-fetch';
import { api } from '../../config/';
import { addLoading, delLoading } from './actions/currentLoads';
import { addAlert } from './actions/alert';

const checkStatus = (result) => {
  if (result.status !== 200) {
    throw new Error(result.statusText);
  }
  return result;
};

const parseJson = result => result.json();

const launchActions = (dispatch, actions = []) => {
  if (dispatch) {
    actions.forEach(action => dispatch(action));
  }
};

const requestJson = (uri, { method = 'GET', body, dispatch } = {}) => {
  const absoluteUri = `${api}/${uri}`;
  const params = { headers: { 'Content-Type': 'application/json' }, method };
  if (body) {
    params.body = JSON.stringify(body || {});
  }
  launchActions(dispatch, [addLoading()]);
  return fetch(absoluteUri, params)
          .then(checkStatus)
          .then(parseJson)
          .then((result) => {
            launchActions(dispatch, [delLoading(), addAlert('success', 'success')]);
            return result;
          })
          .catch((error) => {
            launchActions(dispatch, [delLoading(), addAlert('error', error.message)]);
            return error;
          });
};

export default requestJson;
