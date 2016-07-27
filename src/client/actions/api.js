import 'whatwg-fetch'

const API_URL = 'http://rp4.redpelicans.com:13004/api/todo/';

const doFetch = (endpoint, options) => {
  console.log(options.method, endpoint)
  return (fetch(API_URL + endpoint, options))
}

const apiCall = (options) => (endpoint) => (onResult) => {
  doFetch(endpoint, options)
    .then(response => response.json())
    .then(json => onResult(json))
    .catch(console.warn)
}

export default apiCall;
