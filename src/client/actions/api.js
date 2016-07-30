import 'whatwg-fetch'

const API_URL = 'http://rp4.redpelicans.com:13004/api/todo/';

const doFetch = (endpoint, options) => {
  // console.log(options.method, endpoint, options.body)
  return (fetch(API_URL + endpoint, options))
}

const apiCall = (options) => (endpoint) => (onResult) => {
  doFetch(endpoint, options)
    .then(
      response => response.json(),
      err => { console.warn(err) })
    .then(json => onResult(json))
    .catch(e => console.warn(e, onResult, options.method))
}

export default apiCall;
