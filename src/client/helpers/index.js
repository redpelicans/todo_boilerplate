import 'whatwg-fetch';

require('isomorphic-fetch');

export const requestJSON = (url, options) => fetch(url, options).then(response => response.json()).catch(console.warn);
