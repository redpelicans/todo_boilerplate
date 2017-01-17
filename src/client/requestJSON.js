const getJSON = response => (response.json ? response.json() : null);

const checkResponse = (response) => {
  if (response.status && response.status === 200) {
    return getJSON(response);
  }
  console.error(response); // eslint-disable-line no-console
  return null;
};

const requestJSON = (uri, body, method) => {
  const headers = { 'Content-Type': 'application/json' };
  const options = { headers, body: JSON.stringify(body), method };
  return fetch(uri, options)
    .then(checkResponse);
};

export default requestJSON;
