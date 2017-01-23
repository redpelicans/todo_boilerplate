import 'whatwg-fetch';
import { addLoading, delLoading } from './actions/current_loads';

const checkStatus = (result) => {
  if (result.status !== 200) {
    throw new Error(result.statusText);
  }
  return result;
};

const paserJson = result => result.json();

const requestJson = (uri, { method = 'GET', body, dispatch } = {}) => {
  const absoluteUri = `http://rp3.redpelicans.com:4005/${uri}`;
  const params = { headers: { 'Content-Type': 'application/json' }, method };
  if (body) {
    params.body = JSON.stringify(body || {});
  }
  if (dispatch) dispatch(addLoading());
  return fetch(absoluteUri, params)
    .then(checkStatus).then(paserJson)
    .then((result) => {
      if (dispatch) dispatch(delLoading());
      return result;
    })
    .catch((error) => {
      if (dispatch) dispatch(delLoading());
      console.log('ERROR:', error);
    });
};

export default requestJson;
