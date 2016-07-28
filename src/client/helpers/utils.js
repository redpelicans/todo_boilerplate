export const requestJSON = (url, options) => {
  return fetch(url, options)
    .then(res => res.json())
    .catch(console.warn);
}