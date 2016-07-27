import fetch from 'isomorphic-fetch';

export const fetchJSON = (url, options) => (
  fetch(url, options).then(res => res.json()).catch(console.warn)
);
