import 'whatwg-fetch'

const API_URL = 'http://rp4.redpelicans.com:13004/api/todo/';

const doFetch = (endpoint, request) => {
  console.log('request : ', request)
  return (fetch(API_URL + endpoint, request))
}

const apiCall = (method) => (endpoint) => (onResult) => {
  doFetch(endpoint, { method })
    .then(response => response.json())
    .then(json => onResult(json))
    .catch(err => { console.log('ERROR !!!', err) })
}

export default apiCall;