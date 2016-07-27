import 'whatwg-fetch'

const API_URL = 'http://rp4.redpelicans.com:13004/api/todo/';

const doFetch = (endpoint, request) => {
  console.log(request.method, endpoint)
  return (fetch(API_URL + endpoint, request))
}

const apiCall = (method) => (endpoint) => (onResult) => {
  doFetch(endpoint, { method })
    .then(response => response.json())
    .then(json => onResult(json))
    .catch(err => { console.notice('Error fetching', err) })
}

export default apiCall;