import 'whatwg-fetch'
import _ from 'lodash'

const API_URL = 'http://rp4.redpelicans.com:13004/api/todo/';

const headers = {
  // 'Accept': 'application/json',
  get: {'Content-Type': 'application/json'},
};

const reqTemplates = {
  get: {
    method: 'GET',
    headers: headers.get,
  },
}

const doFetch = (endpoint, request) => {
  console.log('request :', JSON.stringify(request))
  return (fetch(API_URL + endpoint, request))
}

const doGet = (endpoint) => (onResult) => {
  doFetch(endpoint, reqTemplates.get)
    // .then(response => console.log(response))
    .then(response => response.json())
    .then(onResult)
    .catch(err => { 'ERROR !!!', console.log(err) })
}

// fetch(URL)
//   .then(f = (fetch(URL).result) => {})
//   .then()

export default doGet;
