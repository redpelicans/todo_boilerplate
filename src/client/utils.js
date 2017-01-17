import 'whatwg-fetch';

const checkStatus = (result) => {
  if (result.status !== 200) {
    throw new Error(result.statusText);
  }
  return result;
};

const parseJson = result => result.json();

const requestJson = (uri) => {
  const absoluteUri = `http://rp3.redpelicans.com:4006/${uri}`;
  return fetch(absoluteUri).then(checkStatus).then(parseJson);
};

export default requestJson;
